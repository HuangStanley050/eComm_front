import * as actionType from "./actionTypes";

export const register_user_start = userInfo => {
  //console.log("action creator: ", userInfo);
  return {
    type: actionType.REGISTER_USER_START,
    userInfo
  };
};

export const register_user_success = () => ({
  type: actionType.REGISTER_USER_SUCCESS
});
