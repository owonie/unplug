# UNPLUG: Elemental Survivor

> ⚔️ 판타지 원소 조합 핵앤슬래시 서바이버 — AI와 함께 설계하고 개발한 브라우저 게임

🎮 **[PLAY NOW](https://owonie.github.io/unplug/)**

## 🎮 게임 소개

UNPLUG: Elemental Survivor는 뱀파이어 서바이버 스타일의 3D 핵앤슬래시 게임입니다.  
원소 오브를 모아 50개 직업 중 하나로 전직하고, 150개의 고유 스킬로 몬스터 군단을 쓸어버리세요.

### 핵심 특징
- 🔮 **원소 조합 시스템** — 🔥화염 ❄️빙결 ⚡번개 ☠️맹독 4원소를 조합
- ⭐ **50개 직업** — 순수/하이브리드/3원소/4원소/히든 전직
- 🗡️ **150개 스킬** — Active(자동)/Passive/Ultimate 
- 🖱️ **제스처 스킬** — 바깥 드래그=방향공격, 안쪽=쉴드, 원=궁극기
- 💨 **원소별 대쉬** — Fire=순간이동, Ice=가속, Thunder=3연속, Poison=연막
- 🎸 **액션 록 BGM** — 4트랙 로열티프리 + 16종 임팩트 SFX
- 🏆 **3단계 전직** — 좌클릭(1차) / 우클릭(2차) 완전히 다른 스킬 체계

### 조작법
| 입력 | 동작 |
|------|------|
| WASD | 이동 |
| Space | 대쉬 (원소별 고유 동작) |
| 좌클릭 드래그 바깥 | 1차 방향 스킬 (브레스/볼트) |
| 좌클릭 드래그 안쪽 | 쉴드 (흡수 → 5초 후 폭발) |
| 좌클릭 원 그리기 | 궁극기 (340°+ 필요) |
| 우클릭 드래그 바깥 | 2차 강화 스킬 (2차 전직 후) |
| 우클릭 원 그리기 | 강화 궁극기 (더 강력) |
| 1/2/3 | 레벨업 선택 |
| ESC | 일시정지 + 스킬 확인 |
| 🎵 NEXT | BGM 변경 |

## 🤖 AI 활용 과정

이 프로젝트는 **AI(Claude)를 핵심 개발 파트너로 활용**하여 기획~구현~밸런싱까지 전 과정을 진행했습니다.

### AI가 담당한 영역

| 단계 | AI 역할 | 산출물 |
|------|---------|--------|
| **기획** | 게임 컨셉, 원소 조합 구조, 전직 트리 설계 | 50직업 × 3스킬 밸런싱 테이블 |
| **설계** | 직업 조건 테이블, 스킬 데미지/쿨다운/범위 수치 | skill-system-design.md (400+ lines) |
| **구현** | Rust WASM 게임 엔진, Three.js 렌더러, UI | 2000+ lines Rust, 1500+ lines JS |
| **밸런싱** | XP 곡선, 적 스케일링, 전직 조건 완화 | 동적 난이도 시스템 |
| **폴리싱** | 타격감(셰이크/히트스톱), 이펙트, UX | 원소별 고유 비주얼 |
| **디버그** | 무한루프 버그, 스코프 에러, 빌드 문제 | 10+ 핫픽스 |

### AI 활용 방식

```
[사용자] 컨셉/방향 제시 → [AI] 설계 문서 생성
                           → [AI] 코드 구현 (Rust + JS)
                           → [AI] 빌드 + 테스트
[사용자] 피드백           → [AI] 즉시 수정
                           → [AI] 밸런스 조정
                           → [AI] 배포
```

### 주요 AI 기여 사례

1. **50개 직업 밸런싱** — 4원소 조합 매트릭스에서 가능한 모든 조합을 도출하고, 각 직업의 스킬 3개(데미지 배율, 쿨다운, 범위, 효과)를 일관된 밸런스로 설계

2. **전직 조건 최적화** — 초기 설계(원소 Lv3+ 필요)에서 플레이 테스트 피드백 기반으로 조건을 실시간 완화 (Lv2+ → 합계 2+)하여 게임 플로우 개선

3. **히든 전직 시스템** — "스탯만 올려도 전직 가능" 아이디어에서 5개 히든 클래스 + 스킬셋을 즉시 설계/구현

4. **타격감 엔지니어링** — 카메라 셰이크, 히트스톱, 파티클 시스템을 Three.js에 최적화하여 구현

## 🛠 기술 스택

| 레이어 | 기술 | 역할 |
|--------|------|------|
| Game Logic | **Rust → WASM** | 물리, 전투, 스킬, AI |
| Rendering | **Three.js** | 3D 씬, 파티클, 이펙트 |
| Character | **2D Sprite Billboard** | Huntress 스프라이트 시트 |
| Sound | **MP3 + Audio Pool** | BGM 4트랙 + SFX 16종 |
| Build | **wasm-pack + Vite** | 번들링 + 핫리로드 |
| Deploy | **GitHub Pages** | 정적 호스팅 |
| Storage | **localStorage** | 가챠/유물 저장 |

### 아키텍처

```
┌─────────────────────────────────────┐
│           Browser (Client)           │
├──────────┬──────────┬───────────────┤
│ Three.js │ HTML/CSS │ Web Audio     │
│ Renderer │   UI     │   Sound       │
├──────────┴──────────┴───────────────┤
│         JavaScript Bridge            │
├─────────────────────────────────────┤
│       Rust WASM Game Engine          │
│  ┌─────┬─────┬──────┬───────────┐  │
│  │World│Player│Enemy │ClassSystem│  │
│  │     │     │      │50 classes │  │
│  │     │     │      │150 skills │  │
│  └─────┴─────┴──────┴───────────┘  │
└─────────────────────────────────────┘
```

## 📊 게임 시스템

### 전직 구조
```
Lv 1~9:  원소 오브 수집 (최대 4개)
Lv 10:   1차 전직 (15개 + 5개 히든 = 20 선택지)
Lv 15:   2차 전직 (20개 선택지)
Lv 25:   3차 전직 (10개 최종 직업)
```

### 직업 분류
- **순수 단일 원소** (4): Flame Knight, Frost Mage, Storm Warrior, Plague Bearer
- **하이브리드 2원소** (6): Steam Engineer, Plasma Mage, Hellfire Witch...
- **3원소** (4): Elemental Blade, Frost Plague, Thunder Toxin, Vile Storm
- **4원소** (1): Primordial Novice
- **히든 스탯** (5): Weapon Master, Vampire Lord, Berserker, Assassin, Windwalker

### 스킬 타입
- ⚔️ **Active** — 자동 발동 (쿨타임 기반, 범위 내 적 감지)
- 🛡️ **Passive** — 상시 효과
- 💫 **Ultimate** — 수동 발동 (마우스 클릭/드래그)

## 🏗 빌드 & 실행

```bash
# Rust WASM 빌드
cd crate && wasm-pack build --target web --out-dir ../web/pkg

# 개발 서버
cd web && npx vite --host --port 3000

# 프로덕션 빌드 (GitHub Pages)
cd web && npx vite build  # → docs/ 폴더
```

## 📁 프로젝트 구조

```
unplug/
├── crate/src/
│   ├── lib.rs              # WASM 바인딩 (70+ getter)
│   └── game/
│       ├── world.rs        # 메인 루프, 스폰, 전직
│       ├── player.rs       # 플레이어, 원소, 클래스
│       ├── enemy.rs        # 적 AI, 넉백
│       ├── class_data.rs   # 50개 직업 정의
│       └── skill_data.rs   # 150개 스킬 데이터
├── web/
│   ├── index.html          # 게임 UI + 루프
│   └── src/
│       ├── renderer.js     # Three.js 3D 렌더러
│       └── sound.js        # Web Audio 사운드
├── docs/                   # GitHub Pages 빌드 결과
└── docs/skill-system-design.md  # AI 생성 설계 문서
```

## 📝 라이선스

MIT

---

*Built with 🤖 AI-assisted development — from concept to deployment in one session.*
