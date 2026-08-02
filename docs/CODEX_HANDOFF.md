# UNPLUG 프로젝트 상태 — Codex 참고용

## 게임 소스 위치
- Repo: https://github.com/owonie/unplug
- Local: /Users/owon/Documents/GitHub/unplug
- Live: https://owonie.github.io/unplug/

## 현재 통합 진행 중인 것 (Kiro가 처리)
1. ✅ items-atlas.png/json → web/public/assets/items/
2. ✅ elemental-vfx-atlas.png/json → web/public/assets/vfx/
3. ✅ atlas-loader.js (Three.js 연결 유틸) 작성 완료
4. 🔧 XP orb → atlas sprite 교체 (진행 중)
5. 🔧 VFX → atlas 기반 sprite 교체 (진행 중)

## Codex가 추가로 만들어주면 좋은 것 (원화/에셋 제작)

### 최우선
- **Huntress 공격/대시/사망 스프라이트 시트** (현재 Idle만 v2 존재)
  - 사양: 256×256 per frame, 투명 배경, 8 frames horizontal strip
  - 참조: 40_PRODUCTION_SPECS/animation-manifest.json
- **적 4종 스프라이트 시트** (follower/charger/caster/shielder)
  - idle 4fr + attack 4fr + death 4fr per type
  - 참조: 10_APPROVED_CONCEPT_NOT_RUNTIME/world/enemy-archetypes.png

### 높은 가치
- **연속 프레임 VFX flipbook** (현재 정적 PNG만 있음)
  - fire_impact 6frames, frost_impact 6frames 등
  - 512×512 strip, 투명 배경
- **환경 prop 스프라이트** (pillar, broken wall, rune stone)
  - top-down 45° view, 256×256

### 있으면 좋은 것
- 전직 이펙트 시퀀스 (8 frame burst)
- 보스 phase별 실루엣 변화 (스프라이트 기반)
- 레벨업 카드 배경 텍스처

## 기술 사양 (에셋 제작 시 준수)
- 투명 배경 RGBA PNG
- sRGB color space
- 아이템: 256×256 per cell
- VFX: 512×512 per cell
- 캐릭터: 256×256 per cell, pivot bottom-center (x:0.5, y:0.88)
- Naming: {category}_{name}_{variant}.png
- Atlas layout: horizontal strip or grid with JSON manifest
- 색상 팔레트: design-tokens.css 참조

## 현재 게임 기술 스택
- Rust WASM: 게임 로직 (물리, 전투, 스폰, 아이템)
- Three.js: 3D 렌더링 (탑다운 카메라)
- Vite: 빌드
- GitHub Pages: 배포 (docs/ 폴더)
