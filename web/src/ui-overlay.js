/**
 * UI Overlay Module — Game Over, Items, Wave Events
 */

// === GAME OVER: Enhanced Result Screen ===
export function showEnhancedGameOver(engine) {
  const t = Math.floor(engine.game_time());
  const min = Math.floor(t / 60);
  const sec = t % 60;
  const kills = engine.kills();
  const level = engine.player_level();
  const wave = engine.wave_number();
  const points = engine.final_points();
  const className = engine.player_class_name();
  const classTier = engine.player_class_tier();

  // Save points
  let totalPoints = parseInt(localStorage.getItem('unplug_points') || '0');
  totalPoints += points;
  localStorage.setItem('unplug_points', totalPoints);

  // Best records
  const bestKills = Math.max(kills, parseInt(localStorage.getItem('unplug_best_kills') || '0'));
  const bestWave = Math.max(wave, parseInt(localStorage.getItem('unplug_best_wave') || '0'));
  const bestTime = Math.max(t, parseInt(localStorage.getItem('unplug_best_time') || '0'));
  localStorage.setItem('unplug_best_kills', bestKills);
  localStorage.setItem('unplug_best_wave', bestWave);
  localStorage.setItem('unplug_best_time', bestTime);

  // Items collected
  const itemCount = engine.item_count();
  let itemsHtml = '';
  for (let i = 0; i < itemCount; i++) {
    const id = engine.item_id_at(i);
    const lv = engine.item_level_at(i);
    const name = getItemName(id);
    const emoji = getItemEmoji(id);
    itemsHtml += `<span class="result-item">${emoji} ${name} Lv.${lv}</span>`;
  }

  // Class badge
  const tierBadge = classTier === 3 ? '👑' : classTier === 2 ? '🌟' : classTier === 1 ? '⭐' : '';
  const classDisplay = classTier > 0 ? `${tierBadge} ${className}` : `Lv.${engine.player_level()} Unpromoted`;

  // Achievements
  const titles = [];
  if (kills >= 200) titles.push('💀 Genocide');
  else if (kills >= 100) titles.push('☠️ Century Slayer');
  else if (kills >= 50) titles.push('⚔️ Warrior');
  if (wave >= 20) titles.push('🌊 Wave Master');
  else if (wave >= 10) titles.push('🏄 Surfer');
  if (level >= 15) titles.push('👑 Legend');
  else if (level >= 10) titles.push('📈 Veteran');
  if (t >= 300) titles.push('⏳ Eternal');
  else if (t >= 180) titles.push('🕐 Endurer');
  if (classTier >= 3) titles.push('✨ Ascended');
  if (itemCount >= 6) titles.push('🎒 Collector');
  if (engine.player_damage() >= 150) titles.push('🔥 Weapon God');

  // Grade calculation
  const grade = calculateGrade(kills, wave, t, level);

  const el = document.getElementById('gameover-screen');
  el.innerHTML = `
    <div class="go-container">
      <h1 class="go-title">☠️ YOU DIED</h1>
      <div class="go-grade">${grade}</div>
      <div class="go-class">${classDisplay}</div>
      
      <div class="go-stats-grid">
        <div class="go-stat"><span class="go-stat-val">${min}:${sec.toString().padStart(2,'0')}</span><span class="go-stat-label">⏱️ Time</span></div>
        <div class="go-stat"><span class="go-stat-val">${kills}</span><span class="go-stat-label">☠️ Kills</span></div>
        <div class="go-stat"><span class="go-stat-val">${wave}</span><span class="go-stat-label">🌊 Wave</span></div>
        <div class="go-stat"><span class="go-stat-val">${level}</span><span class="go-stat-label">⭐ Level</span></div>
      </div>

      <div class="go-items">${itemsHtml || '<span style="color:#666">No items</span>'}</div>

      <div class="go-points">💰 +${points} pts <span style="color:#888;font-size:12px">(Total: ${totalPoints})</span></div>
      
      ${titles.length > 0 ? `<div class="go-achievements">${titles.join(' • ')}</div>` : ''}
      
      <div class="go-best">
        <span>🏆 Best: ${bestKills} kills</span> • 
        <span>Wave ${bestWave}</span> • 
        <span>${Math.floor(bestTime/60)}:${(bestTime%60).toString().padStart(2,'0')}</span>
      </div>

      <div class="go-buttons">
        <button id="retry-btn" class="go-btn go-btn-primary">🔄 RETRY</button>
        <button id="share-btn" class="go-btn go-btn-secondary">📤 Share</button>
      </div>
    </div>
  `;
  el.style.display = 'flex';

  // Re-bind retry button
  document.getElementById('retry-btn').onclick = () => {
    el.style.display = 'none';
    if (window._restartGame) window._restartGame();
  };
  document.getElementById('share-btn').onclick = () => {
    const text = `⚔️ UNPLUG ${grade}\n☠️ ${kills} kills | 🌊 Wave ${wave} | ⏱️ ${min}:${sec.toString().padStart(2,'0')}\n${classDisplay}\nhttps://owonie.github.io/unplug/`;
    navigator.clipboard?.writeText(text);
    document.getElementById('share-btn').textContent = '✅ Copied!';
  };
}

function calculateGrade(kills, wave, time, level) {
  const score = kills * 2 + wave * 10 + time / 10 + level * 5;
  if (score >= 500) return '<span style="color:#ff44ff;font-size:48px">SSS</span>';
  if (score >= 350) return '<span style="color:#ff8844;font-size:44px">SS</span>';
  if (score >= 250) return '<span style="color:#ffcc00;font-size:40px">S</span>';
  if (score >= 150) return '<span style="color:#44ff44;font-size:36px">A</span>';
  if (score >= 80) return '<span style="color:#4488ff;font-size:32px">B</span>';
  if (score >= 40) return '<span style="color:#aaa;font-size:28px">C</span>';
  return '<span style="color:#666;font-size:24px">D</span>';
}

// === WAVE EVENT UI ===
export function showWaveEventUI(engine) {
  const name0 = engine.wave_event_name(0);
  const name1 = engine.wave_event_name(1);
  const benefit0 = engine.wave_event_benefit(0);
  const cost0 = engine.wave_event_cost(0);
  const benefit1 = engine.wave_event_benefit(1);
  const cost1 = engine.wave_event_cost(1);

  let el = document.getElementById('wave-event-ui');
  if (!el) {
    el = document.createElement('div');
    el.id = 'wave-event-ui';
    document.body.appendChild(el);
  }

  el.innerHTML = `
    <div class="we-container">
      <h2 class="we-title">⚡ WAVE EVENT</h2>
      <p class="we-subtitle">Choose your fate</p>
      <div class="we-choices">
        <button class="we-choice" data-choice="0">
          <div class="we-choice-name">${name0}</div>
          <div class="we-choice-benefit">✅ ${benefit0}</div>
          <div class="we-choice-cost">⚠️ ${cost0}</div>
        </button>
        <button class="we-choice" data-choice="1">
          <div class="we-choice-name">${name1}</div>
          <div class="we-choice-benefit">✅ ${benefit1}</div>
          <div class="we-choice-cost">⚠️ ${cost1}</div>
        </button>
      </div>
      <p class="we-skip">Press [ESC] to skip</p>
    </div>
  `;
  el.style.display = 'flex';

  // Bind choice buttons
  el.querySelectorAll('.we-choice').forEach(btn => {
    btn.onclick = () => {
      const choice = parseInt(btn.dataset.choice);
      engine.choose_wave_event(choice);
      el.style.display = 'none';
      window._waveEventShown = false;
    };
  });
}

export function hideWaveEventUI() {
  const el = document.getElementById('wave-event-ui');
  if (el) el.style.display = 'none';
}

// === ITEM DISPLAY IN LEVEL-UP ===
export function getItemChoiceHtml(engine, upgradeId) {
  if (upgradeId < 400 || upgradeId > 412) return null;
  const name = engine.item_name_for_choice(upgradeId);
  const desc = engine.item_desc_for_choice(upgradeId);
  const itemId = upgradeId - 400;
  const currentLv = engine.item_count ? getItemCurrentLevel(engine, itemId) : 0;
  const lvText = currentLv > 0 ? ` (Lv.${currentLv} → ${currentLv + 1})` : ' (NEW!)';
  return `<span style="color:#44ddff">${name}${lvText}</span><br><span style="color:#888;font-size:11px">${desc}</span>`;
}

function getItemCurrentLevel(engine, itemId) {
  const count = engine.item_count();
  for (let i = 0; i < count; i++) {
    if (engine.item_id_at(i) === itemId) return engine.item_level_at(i);
  }
  return 0;
}

// === ITEM HUD (bottom-left inventory display) ===
export function updateItemHud(engine) {
  let el = document.getElementById('item-hud');
  if (!el) {
    el = document.createElement('div');
    el.id = 'item-hud';
    document.body.appendChild(el);
  }

  const count = engine.item_count();
  if (count === 0) { el.style.display = 'none'; return; }

  let html = '';
  for (let i = 0; i < count; i++) {
    const id = engine.item_id_at(i);
    const lv = engine.item_level_at(i);
    html += `<div class="ih-item" title="${getItemName(id)} Lv.${lv}">${getItemEmoji(id)}<span class="ih-lv">${lv}</span></div>`;
  }
  el.innerHTML = html;
  el.style.display = 'flex';
}

// === Helpers ===
function getItemName(id) {
  const names = { 1:'Iron Ring', 2:'Vampire Fang', 3:'Magnet Core', 4:'Storm Boots', 5:'Critical Eye', 6:'Phoenix Feather', 7:'Echo Strike', 8:'Frost Aura', 9:'XP Charm', 10:'Berserker Mask', 11:'Shield Gen', 12:'Soul Harvest' };
  return names[id] || '???';
}

function getItemEmoji(id) {
  const emojis = { 1:'🛡️', 2:'🧛', 3:'🧲', 4:'👟', 5:'👁️', 6:'🔥', 7:'⚡', 8:'❄️', 9:'✨', 10:'😈', 11:'💠', 12:'💀' };
  return emojis[id] || '📦';
}

// === CSS injection ===
export function injectUIStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Game Over */
    .go-container{text-align:center;max-width:420px;padding:32px}
    .go-title{color:#ff2222;font-size:28px;margin-bottom:4px;text-shadow:0 0 20px #ff0000}
    .go-grade{margin:8px 0}
    .go-class{color:#ffcc00;font-size:16px;margin-bottom:16px}
    .go-stats-grid{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:12px;margin:16px 0}
    .go-stat{display:flex;flex-direction:column;align-items:center}
    .go-stat-val{color:#fff;font-size:20px;font-weight:bold}
    .go-stat-label{color:#888;font-size:11px;margin-top:2px}
    .go-items{margin:12px 0;display:flex;flex-wrap:wrap;gap:6px;justify-content:center}
    .result-item{background:#1a1a2a;border:1px solid #333;border-radius:4px;padding:2px 8px;font-size:11px;color:#aaa}
    .go-points{color:#ffcc00;font-size:18px;margin:12px 0}
    .go-achievements{color:#aaa;font-size:11px;margin:8px 0;line-height:1.8}
    .go-best{color:#666;font-size:11px;margin:8px 0}
    .go-buttons{display:flex;gap:12px;margin-top:20px;justify-content:center}
    .go-btn{padding:12px 28px;font-size:14px;border-radius:8px;cursor:pointer;font-family:inherit;border:2px solid}
    .go-btn-primary{background:#1a1a1a;color:#fff;border-color:#ff8844}
    .go-btn-primary:hover{background:#2a1a1a;border-color:#ffaa66}
    .go-btn-secondary{background:#111;color:#888;border-color:#444}
    .go-btn-secondary:hover{background:#1a1a1a;color:#aaa}

    /* Wave Event */
    #wave-event-ui{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);display:none;align-items:center;justify-content:center;z-index:1500}
    .we-container{text-align:center;max-width:500px;padding:32px}
    .we-title{color:#ffcc00;font-size:24px;margin-bottom:4px;text-shadow:0 0 10px #ffcc00}
    .we-subtitle{color:#888;font-size:12px;margin-bottom:20px}
    .we-choices{display:flex;gap:16px;justify-content:center}
    .we-choice{background:#0a0a1a;border:2px solid #333;border-radius:12px;padding:20px;min-width:200px;cursor:pointer;text-align:center;transition:all 0.15s}
    .we-choice:hover{border-color:#ffcc00;background:#1a1a2a;transform:translateY(-2px)}
    .we-choice-name{color:#fff;font-size:16px;font-weight:bold;margin-bottom:10px}
    .we-choice-benefit{color:#44ff88;font-size:13px;margin:4px 0}
    .we-choice-cost{color:#ff6644;font-size:12px;margin:4px 0}
    .we-skip{color:#555;font-size:10px;margin-top:16px}

    /* Item HUD */
    #item-hud{position:fixed;bottom:40px;left:16px;display:none;gap:4px;flex-wrap:wrap;max-width:200px;pointer-events:none;z-index:100}
    .ih-item{width:28px;height:28px;background:rgba(0,0,0,0.7);border:1px solid #333;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:14px;position:relative}
    .ih-lv{position:absolute;bottom:-1px;right:1px;font-size:8px;color:#ffcc00;font-weight:bold}
  `;
  document.head.appendChild(style);
}
