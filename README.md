# 🛫SkyLand

<img src="./src/assets/favicon.ico" />

[직접 보러가기](https://sky-land.vercel.app/)

### 😀어떤 저장소인가요?

👂대화형 ThreeJS 렌더링 구현, Model Animation 연습을 위해 구현된 저장소

---

### 😁어떤 핵심 기술이 사용되었나요?

- `React Three Fiber` : 3D 모델 생성 관련
- `React Three Drei` : 카메라 및 컨트롤러 쉐이더 등 조회 관련
- `@react-spring/three`: 애니메이션 그룹 관련

---

### 😂누가 협업했나요?

개인 프로젝트

---

### 🤣언제 제작되었나요?

2023-11-28 정상동작 확인

---

### 😃알게된 점이 있나요?

```javascript
birdRef.current.position.y = Math.sin(clock.elapsedTime) \* 0.2 + 2;
```
Island의 공작의 Y 좌표를 위 아래로 토글 시키는 역할을 수행해야 해서 문제를 고민했을 때 다음과 같은 답이 있음을 알게되었음

![image](https://github.com/kwb020312/SkyLand/assets/46777310/6b4ba8a7-d245-4b78-8f05-3c8142fc4f39)

`Sine` 파동은 이렇게 생겼기 때문에 `clock.elapsedTime` 즉 모델이 호출된 시간을 부여하며 적절히 값을 조절하면 해당 형태에 따른 Y 좌표 변경이 가능함

---
