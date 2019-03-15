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
    case actionType.INCREASE_PRODUCT:
      let id = action.productInfo._id;
      let copiedProducts = [...state.orderedProducts];
      let foundProduct = copiedProducts.find(product => product._id === id);
      let copiedIndex = copiedProducts.findIndex(index => index._id === id);
      foundProduct.quantity += 1;
      copiedProducts.splice(copiedIndex, 1, foundProduct);
      //console.log(copiedProducts);
      return {
        ...state,
        orderedProducts: [...copiedProducts]
      };
    default:
      return state;
  }
};

export default reducer;
