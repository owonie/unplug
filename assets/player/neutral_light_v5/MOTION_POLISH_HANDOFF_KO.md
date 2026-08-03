# Huntress 모션 폴리시 적용 명세

## 지금 보이는 문제의 정체

공격 포즈의 팔과 무기가 넓어지는 것은 정상입니다. 부자연스러운 부분은 캐릭터의 월드 좌표·Sprite plane·카메라가 동시에 움직이는 것입니다. 공격 애니메이션 자체에 이동을 넣고 게임 코드에서도 캐릭터를 이동시키면 이중 이동처럼 보입니다.

## 반드시 적용할 항목

### 1. 캐릭터 루트와 렌더 루트를 분리

- `playerRoot`: 충돌체와 실제 월드 위치만 담당
- `visualRoot`: Sprite, contact shadow, afterimage 담당
- 공격 중 `playerRoot`는 이동 입력/게임 로직 외에는 움직이지 않습니다.
- 공격 이미지 내부의 포즈 변화 때문에 Sprite transform을 추가 이동시키지 않습니다.
- Dash 이동은 충돌체를 기준으로 한 번만 계산하고 Sprite는 충돌체를 따라갑니다.

### 2. 애니메이션 전환은 두 Sprite로 짧게 크로스페이드

즉시 texture를 교체하면 서로 다른 실루엣이 한 프레임 만에 바뀌어 팝이 발생합니다. 현재 clip과 다음 clip을 잠시 동시에 표시합니다.

- Idle → Run: 90ms
- Run → Idle: 110ms
- Locomotion → Attack: 45ms
- Attack → Locomotion: 85ms
- Locomotion → Dash: 30ms
- Dash → Locomotion: 70ms
- smoothstep 곡선을 사용합니다.
- 공격 contact 전후를 길게 블렌드하지 않습니다. 타격 포즈가 흐려지기 때문입니다.

### 3. 공격 접촉 프레임

- `huntress_attack_v2_neutral_v5` frame 5에서 데미지/VFX/사운드를 동시에 발생시킵니다.
- frame 5를 28ms만 추가 유지합니다.
- 공격 VFX와 칼 잔상은 캐릭터 본체와 별도 Sprite로 렌더합니다.
- 본체에는 AdditiveBlending, scale pulse, 전체 exposure 증가를 적용하지 않습니다.

### 4. 카메라가 화면 밖으로 밀어내지 않게 처리

- 캐릭터 중심이 viewport 가장자리 14% 안으로 진입하면 camera look-ahead를 줄입니다.
- 공격 셰이크는 화면 폭의 0.35% 이하, 75ms로 제한합니다.
- Dash 셰이크는 화면 폭의 0.25% 이하, 90ms로 제한합니다.
- 셰이크는 추적 카메라 위치가 아니라 내부 camera rig에 적용합니다.
- 셰이크를 더한 뒤 최종 camera bounds를 다시 clamp합니다.

## 하지 말아야 할 것

- Attack/Dash에서 Sprite scale을 키우기
- strip 전체 폭으로 plane geometry를 계산하기
- 타격감을 위해 캐릭터 전체를 1.1배 pulse하기
- 공격 애니메이션 내 이동과 코드 knock-forward를 동시에 적용하기
- 모든 전환에 150ms 이상의 긴 crossfade 사용하기
- 카메라 위치와 캐릭터 visualRoot 양쪽에 같은 shake 적용하기

수치는 `huntress-motion-polish-profile.json`에서 직접 읽거나 동일하게 상수화할 수 있습니다.
