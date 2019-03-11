import * as actionType from "../actions/actionTypes";
const initialState = {
  loading: false,
  products: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_PRODUCT:
      return {
        ...state,
        loading: true
      };
    case actionType.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
