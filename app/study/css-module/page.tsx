import styles from './styles/cssModule.module.scss';
export default function Page() {
  return (
    <div className={styles.cssModule}>
      <h1>CSS Module</h1>
      <p>
        Styled JSX는 성능 관점에서 단점이 있다. 서버가 미리 CSS 규칙들을 생성해도 클라이언트에서 리액트 하이드레이션이
        끝나면 CSS 규칙을 다시 생성해야 한다는 것이다. 이로 인해 실행 시점에 부하가 커지며 웹 애플리케이션이 계속
        느려지게 된다. 기능을 추가할수록 상황은 더 나빠진다.
      </p>
      <p>
        이때 Styled JSX 대신 사용할 수 있는 대안이 CSS Module 이다. CSS Module은 Styled JSX와 마찬가지로 지역 스코프를
        갖는 CSS 규칙을 만들 때 CSS 클래스 간 동일 이름으로 충돌을 방지해준다.
      </p>
    </div>
  );
}
