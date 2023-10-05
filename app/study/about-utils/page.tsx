import styles from './styles/aboutUtils.module.scss';

export default function Page() {
  return (
    <div className={styles.aboutUtils}>
      <h1>애플리케이션 개발에 유용한 다양한 도구들</h1>
      <h3>React Hook Form</h3>
      <p>
        폼 밸리데이션 라이브러리. 여기서 제공하는 Controller 컴포넌트를 이용하면 외부/커스텀 UI 컴포넌트의 밸리데이션도
        쉽게 가능하다!
      </p>
      <h3>SWR</h3>
      <p>
        버셀에서 개발한 데이터 취득용 React Hooks 라이브러리. HTTP RFC 5861의 stale-while-revalidate 에서 유래함. 요청과
        캐시에 관한 것으로 SWR은 먼저 캐시에서 데이터를 반환하고(stale), 다음에 인증 요청을 보내고(revalidate),
        마지막으로 최신 데이터를 가져오는 식으로 작동한다.
      </p>
      <h3>React Content Loader</h3>
      <p>
        로딩을 위한 placeholder를 간단히 작성할 수 있는 라이브러리. SVG를 사용해 로더 형태를 커스터마이즈 할 수 있다.
      </p>
      <h3>Material Icons</h3>
      <p>
        <em>
          <b>Tip!</b>
        </em>
        {' <span>'} 등으로 감싸고, 부모의 스타일에 따르도록(inherit) 하면 아이콘의 색상과 크기를 자유롭게 변경할 수
        있다.
      </p>
    </div>
  );
}
