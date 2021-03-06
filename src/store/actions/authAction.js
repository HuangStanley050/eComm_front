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

export const login_start = userInfo => {
  return {
    type: actionType.LOGIN_START,
    userInfo
  };
};

export const login_success = userInfo => ({
  type: actionType.LOGIN_SUCCESS,
  userInfo
});

export const login_fail = message => ({
  type: actionType.LOGIN_FAIL,
  message
});

export const clear_error = () => ({ type: actionType.CLEAR_ERROR });

export const logout = () => ({ type: actionType.LOGOUT });
export const logout_clear = () => ({ type: actionType.LOGOUT_CLEAR });
