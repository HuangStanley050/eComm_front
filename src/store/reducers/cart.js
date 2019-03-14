import * as actionType from "../actions/actionTypes";
const initialState = {
  orderedProducts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return {
        ...state,
        orderedProducts: [...state.orderedProducts, action.productInfo]
      };
    default:
      return state;
  }
};

export default reducer;
