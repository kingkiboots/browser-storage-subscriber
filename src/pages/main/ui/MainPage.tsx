import {
  MainSetSessionWidget,
  MainViewSessionStateWidget,
} from "../../../widgets/main";
import "../styles/MainPage.css";

export const MainPage = () => {
  return (
    <>
      <h1>세션 스토리지에 정보 저장하고 이를 구독하기</h1>
      <div className="card">
        <MainSetSessionWidget />
      </div>
      <p className="read-the-docs">
        <MainViewSessionStateWidget />
      </p>
    </>
  );
};
