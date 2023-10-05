export default function Page() {
  return (
    <>
      <h1>JEJU friend 개발할 때, 이렇게 하기로 결정했다.</h1>
      <ul>
        <li>CSS Module, SCSS를 사용한다. CSS-IN-JS 는 사용하지 않는다.</li>
        <li>반응형으로 개발한다.</li>
        <li>font-family는 pretendard를 사용한다.</li>
        <li>
          폰트 스타일은 mixin 으로 선언된 스타일 중 찾아서 사용하고 mixin 에 없는 경우, mixin 으로 생성하여 사용한다.
        </li>
        <li>
          scss에서 @extend의 사용은 최소화한다.(@extend는 연관성이 있는 규칙들 사이에 특성을 공유할 때만 사용하기)
        </li>
      </ul>
      <h2>레이아웃에 대한 결정</h2>
      <ul>
        <li>데스크탑에서 max-width 는 1,220px 이다.</li>
      </ul>
      <h3>break point 설정</h3>
      <ul>
        <li>모바일, 태블릿, 데스크탑 3가지 넓이를 브레이크 포인트로 정한다.</li>
      </ul>
    </>
  );
}
