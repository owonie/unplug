# Huntress Neutral Light v5 — 크기 통합 규칙

## 결론

- 모든 상태의 셀은 `256×256`, pivot은 `(0.5, 0.93)`, 런타임 world scale은 `1.0`입니다.
- Idle/Run/Attack/Gesture/Hit/Death/Revive의 서 있는 기준 신장은 `218px`입니다.
- 기존 Dash 기준 신장만 `206px`였으며, v5 이미지에 `218 / 206 = 1.058252` 보정을 미리 적용했습니다.
- 따라서 코드에서 Attack 또는 Dash에 별도 scale을 곱하면 다시 크기가 틀어집니다.

## Three.js 로더 필수 규칙

1. 상태와 무관하게 동일한 Sprite/Plane geometry 및 `scale`을 유지합니다.
2. strip 전체 크기(`frameCount × 256`)로 월드 폭을 계산하지 않습니다.
3. 한 프레임의 논리 크기는 항상 `256×256`입니다. 상태 전환 때는 UV repeat/offset만 변경합니다.
4. `sprite.scale`, geometry, parent scale을 animation state 진입 시 수정하지 않습니다.
5. JSON의 `assetScaleCorrection`은 제작 기록입니다. 이미지에 이미 반영됐으므로 런타임에 다시 곱하지 않습니다.
6. pivot/anchor는 전 상태 `(0.5, 0.93)`으로 고정합니다.

```js
// 상태가 바뀌어도 이 값은 동일
sprite.scale.set(characterWorldSize, characterWorldSize, 1);

texture.repeat.set(1 / frameCount, 1);
texture.offset.x = frameIndex / frameCount;
// strip.pixelWidth 또는 animation별 bbox로 sprite.scale을 계산하지 않음
```

## 시각적 오해 방지

Attack contact 프레임은 팔·칼·잔상이 옆으로 뻗어 실루엣 폭이 커집니다. 캐릭터 본체의 신장이 커진 것은 아닙니다. 이 포즈를 Idle과 같은 폭으로 억지로 축소하면 공격의 힘이 사라지고 발 위치도 뜹니다. 게임에서 머리·몸통까지 커져 보인다면 에셋 문제가 아니라 상태별 런타임 scale/geometry 변경을 확인하세요.

## 교체 대상

- 메타데이터: `huntress-neutral-v5.json`
- 이미지: `*_neutral_v5.png`
- 그림자: `huntress_contact_shadow.png`
- v4는 fallback으로 유지하고 삭제하지 않습니다.
