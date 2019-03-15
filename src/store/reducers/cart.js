import * as actionType from "../actions/actionTypes";
const initialState = {
  orderedProducts: [],
  quantity: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return {
        ...state,
        orderedProducts: [...state.orderedProducts, action.productInfo]
      };
    case actionType.INCREASE_PRODUCT:
      //console.log(action.productInfo);
      // let id = action.productInfo._id;
      // let products = [...state.orderedProducts];
      // let foundProduct = products.find(product => product._id === id);
      // foundProduct.quantity += 1;
      // console.log(foundProduct);
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
