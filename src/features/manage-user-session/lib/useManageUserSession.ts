import { useCallback } from "react";
import { useSubscribeMemberInfo } from "../../../entities/member";

export const useManageUserSession = () => {
  const { setMemberInfo } = useSubscribeMemberInfo();

  const handleLogin = useCallback(() => {
    setMemberInfo({ name: "홍*동" });
  }, []);

  const handleLogout = useCallback(() => {
    setMemberInfo(null);
  }, []);

  return {
    handleLogin,
    handleLogout,
  };
};
