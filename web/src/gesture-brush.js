/**
 * Gesture Brush System — Canvas 2D calligraphy-style trail
 * Each class has a different "pen feel"
 */

export class GestureBrush {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'gesture-canvas';
    this.canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:998';
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.points = [];
    this.fadeTimer = 0;
    this.fading = false;
    this.style = 'rune'; // rune | brush | electric | ink
    this.element = 0;

    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
  }

  /** Set brush style based on class */
  setStyle(classTier, element) {
    this.element = element;
    if (element === 1) this.style = 'brush';      // 🔥 거친 붓
    else if (element === 2) this.style = 'rune';   // ❄️ 정밀 룬
    else if (element === 3) this.style = 'electric'; // ⚡ 방전
    else if (element === 4) this.style = 'ink';    // ☠️ 먹물 서예
    else this.style = 'rune'; // default: 룬 문자
  }

  /** Add point during drag */
  addPoint(x, y) {
    const now = performance.now();
    const last = this.points[this.points.length - 1];
    let speed = 0;
    if (last) {
      const dx = x - last.x, dy = y - last.y;
      const dt = (now - last.t) || 1;
      speed = Math.sqrt(dx * dx + dy * dy) / dt;
    }
    this.points.push({ x, y, t: now, speed });
    this.fading = false;
    this.draw();
  }

  /** Start fade-out after gesture release */
  release(gesture = 'unknown') {
    // If gesture recognized, snap trail to clean rune shape before fading
    if (gesture !== 'unknown' && gesture !== 'failed' && this.points.length > 5) {
      this._snapToRune(gesture);
    }
    this.fading = true;
    this.fadeTimer = performance.now();
    this._fadeLoop();
  }

  /** Snap trail to idealized rune shape (인식 완료 → 정렬) */
  _snapToRune(gesture) {
    const ctx = this.ctx;
    const colors = this._getColors();
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2;

    // Brief bright flash on the trail
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = `rgba(${colors.r}, ${colors.g}, ${colors.b}, 0.6)`;
    ctx.lineWidth = 2;
    ctx.shadowColor = colors.glow;
    ctx.shadowBlur = 20;

    if (gesture === 'circle' && this.points.length > 10) {
      // Draw a perfect circle over the messy trail
      const first = this.points[0];
      const last = this.points[this.points.length - 1];
      const midX = (first.x + last.x) / 2;
      const midY = (first.y + last.y) / 2;
      let maxDist = 0;
      for (const p of this.points) {
        const d = Math.sqrt((p.x - midX) ** 2 + (p.y - midY) ** 2);
        if (d > maxDist) maxDist = d;
      }
      ctx.beginPath();
      ctx.arc(midX, midY, maxDist * 0.7, 0, Math.PI * 2);
      ctx.stroke();
    } else if (gesture === 'zigzag') {
      // Draw clean zigzag
      ctx.beginPath();
      const start = this.points[0];
      ctx.moveTo(start.x, start.y);
      const segs = 6;
      const totalDx = this.points[this.points.length-1].x - start.x;
      const totalDy = this.points[this.points.length-1].y - start.y;
      for (let i = 1; i <= segs; i++) {
        const t = i / segs;
        const zigX = start.x + totalDx * t + (i % 2 === 0 ? -30 : 30);
        const zigY = start.y + totalDy * t;
        ctx.lineTo(zigX, zigY);
      }
      ctx.stroke();
    } else if (gesture === 'vshape') {
      // Draw clean V
      const start = this.points[0];
      const last = this.points[this.points.length - 1];
      const midY = Math.max(start.y, last.y) + 40;
      const midX = (start.x + last.x) / 2;
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(midX, midY);
      ctx.lineTo(last.x, last.y);
      ctx.stroke();
    }

    ctx.globalCompositeOperation = 'source-over';
    ctx.shadowBlur = 0;
  }

  /** Clear immediately */
  clear() {
    this.points = [];
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /** Main draw — redraws entire trail each frame during drag */
  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.points.length < 2) return;

    const colors = this._getColors();
    const recent = this.points.slice(-60); // last 60 points

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    for (let i = 1; i < recent.length; i++) {
      const p0 = recent[i - 1];
      const p1 = recent[i];
      const progress = i / recent.length; // 0→1 (old→new)

      // Width: varies by speed (slow=thick, fast=thin) — calligraphy feel
      const baseWidth = this.style === 'electric' ? 2 : this.style === 'ink' ? 8 : this.style === 'brush' ? 6 : 3;
      const speedFactor = Math.max(0.3, 1.0 - p1.speed * 0.8);
      const width = baseWidth * speedFactor * (0.5 + progress * 0.5);

      // Opacity: fades at tail
      const alpha = progress * 0.9;

      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);

      // Style-specific rendering
      if (this.style === 'electric') {
        // ⚡ Jittery lightning line
        const jx = (Math.random() - 0.5) * 4;
        const jy = (Math.random() - 0.5) * 4;
        ctx.lineTo(p1.x + jx, p1.y + jy);
        ctx.strokeStyle = `rgba(${colors.r}, ${colors.g}, ${colors.b}, ${alpha})`;
        ctx.lineWidth = width + Math.random() * 2;
        // Glow
        ctx.shadowColor = colors.glow;
        ctx.shadowBlur = 12 + Math.random() * 8;
      } else if (this.style === 'ink') {
        // ☠️ Smooth ink with bleeding edges
        ctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) / 2, (p0.y + p1.y) / 2);
        ctx.strokeStyle = `rgba(${colors.r}, ${colors.g}, ${colors.b}, ${alpha * 0.8})`;
        ctx.lineWidth = width * 1.2;
        ctx.shadowColor = colors.glow;
        ctx.shadowBlur = 6;
      } else if (this.style === 'brush') {
        // 🔥 Rough brush with splatter
        ctx.lineTo(p1.x, p1.y);
        ctx.strokeStyle = `rgba(${colors.r}, ${colors.g}, ${colors.b}, ${alpha})`;
        ctx.lineWidth = width;
        ctx.shadowColor = colors.glow;
        ctx.shadowBlur = 10;
        // Splatter dots
        if (Math.random() < 0.3) {
          ctx.fillStyle = `rgba(${colors.r}, ${colors.g}, ${colors.b}, ${alpha * 0.5})`;
          ctx.fillRect(p1.x + (Math.random() - 0.5) * 12, p1.y + (Math.random() - 0.5) * 12, 2 + Math.random() * 3, 2 + Math.random() * 3);
        }
      } else {
        // ❄️ Precise rune — thin, angular, crisp
        ctx.lineTo(p1.x, p1.y);
        ctx.strokeStyle = `rgba(${colors.r}, ${colors.g}, ${colors.b}, ${alpha})`;
        ctx.lineWidth = width;
        ctx.shadowColor = colors.glow;
        ctx.shadowBlur = 8;
      }

      ctx.stroke();
    }

    // Reset shadow for next frame
    ctx.shadowBlur = 0;
  }

  /** Fade animation after release */
  _fadeLoop() {
    if (!this.fading) return;
    const elapsed = (performance.now() - this.fadeTimer) / 1000;
    const fadeTime = 0.8; // fade over 0.8s

    if (elapsed >= fadeTime) {
      this.clear();
      return;
    }

    const ctx = this.ctx;
    // Dim the entire canvas
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = `rgba(0, 0, 0, ${elapsed / fadeTime * 0.15})`;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.globalCompositeOperation = 'source-over';

    requestAnimationFrame(() => this._fadeLoop());
  }

  /** Get color palette based on element */
  _getColors() {
    switch (this.element) {
      case 1: return { r: 255, g: 120, b: 30, glow: '#ff4400' };  // 🔥 Fire
      case 2: return { r: 150, g: 220, b: 255, glow: '#44ccff' }; // ❄️ Ice
      case 3: return { r: 255, g: 220, b: 50, glow: '#ffcc00' };  // ⚡ Thunder
      case 4: return { r: 160, g: 80, b: 255, glow: '#9933ff' };  // ☠️ Poison
      default: return { r: 220, g: 200, b: 180, glow: '#daa520' }; // Neutral gold
    }
  }
}
