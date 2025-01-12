import {
  useManageUserSession,
  useViewUserSession,
} from "../../../features/manage-user-session";

export const MainSetSessionWidget = () => {
  const { handleLogin, handleLogout } = useManageUserSession();
  const { isLoggedIn } = useViewUserSession();
  return (
    <div>
      <button onClick={isLoggedIn ? handleLogout : handleLogin}>
        {isLoggedIn ? "로그아웃 하기" : "로그인 하기"}
      </button>
    </div>
  );
};
