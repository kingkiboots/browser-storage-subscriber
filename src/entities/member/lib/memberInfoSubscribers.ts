import { useBrowserStorage } from "../../../shared/lib";
import {
  MEMBER_INFO_BROWSER_STORAGE_KEY,
  MEMBER_INFO_BROWSER_STORAGE_TYPE,
} from "../consts/memberInfoConsts";
import { MemberInfo } from "../types/MemberInfoTypes";

export const useSubscribeMemberInfo = () => {
  const [memberInfo, setMemberInfo] = useBrowserStorage<MemberInfo | null>(
    MEMBER_INFO_BROWSER_STORAGE_TYPE,
    MEMBER_INFO_BROWSER_STORAGE_KEY,
    null
  );

  return {
    memberInfo,
    setMemberInfo,
  };
};
