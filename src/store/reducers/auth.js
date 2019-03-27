import * as actionType from "../actions/actionTypes";
const initialState = {
  isAuth: false,
  isRegistered: false,
  userInfo: {},
  loading: false,
  orderHistory: [],
  error: ""
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
        loading: false,
        isRegistered: true
      };
    case actionType.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    case actionType.CLEAR_ERROR:
      return {
        ...state,
        error: ""
      };
    case actionType.LOGOUT:
      return {
        ...state,
        isAuth: false,
        userInfo: {}
      };
    default:
      return state;
  }
};

export default reducer;
