import * as actionType from "../actions/actionTypes";
const initialState = {
  isAuth: false,
  userInfo: {},
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_START:
    case actionType.REGISTER_USER_START:
      return {
        ...state,
        loading: true
      };
    case actionType.LOGIN_SUCCESS:
      //console.log(action.userInfo);
      return {
        ...state,
        isAuth: true,
        userInfo: { ...action.userInfo },
        loading: false
      };
    case actionType.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
