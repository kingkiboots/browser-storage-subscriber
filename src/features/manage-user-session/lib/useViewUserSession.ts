import { useSubscribeMemberInfo } from "../../../entities/member";

export const useViewUserSession = () => {
  const { memberInfo } = useSubscribeMemberInfo();

  return {
    isLoggedIn: memberInfo !== null,
    memberInfo,
  };
};
