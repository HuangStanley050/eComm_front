import * as actionType from "./actionTypes";

export const register_user_start = userInfo => {
  return {
    type: actionType.REGISTER_USER_START,
    userInfo
  };
};
