import { useViewUserSession } from "../../../features/manage-user-session";

export const MainViewSessionStateWidget = () => {
  const { isLoggedIn, memberInfo } = useViewUserSession();
  return (
    <div>{isLoggedIn ? `이름: ${memberInfo?.name}` : "로그인 해주세요."}</div>
  );
};
