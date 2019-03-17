import * as actionType from "../actions/actionTypes";

const initialState = {
  orderedProducts: [],
  totalPrice: null
};

const processProduct = (type, id, products) => {
  if (type === actionType.INCREASE_PRODUCT) {
    let foundProduct = products.find(product => product._id === id);
    let copiedIndex = products.findIndex(index => index._id === id);
    foundProduct.quantity += 1;
    products.splice(copiedIndex, 1, foundProduct);
    return products;
  }
  if (type === actionType.DECREASE_PRODUCT) {
    let foundProduct = products.find(product => product._id === id);
    let copiedIndex = products.findIndex(index => index._id === id);
    foundProduct.quantity -= 1;
    products.splice(copiedIndex, 1, foundProduct);
    if (foundProduct.quantity <= 0) {
      foundProduct.quantity = 0;
    }
    return products;
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      let totalPrice;
      if (state.orderedProducts.length === 0) {
        totalPrice = action.productInfo.quantity * action.productInfo.price;
      } else {
        totalPrice =
          state.totalPrice +
          action.productInfo.quantity * action.productInfo.price;
      }
      return {
        ...state,
        orderedProducts: [...state.orderedProducts, action.productInfo],
        totalPrice: totalPrice
      };
    case actionType.INCREASE_PRODUCT:
      let id = action.productInfo._id;
      let copiedProducts = [...state.orderedProducts];
      // let foundProduct = copiedProducts.find(product => product._id === id);
      // let copiedIndex = copiedProducts.findIndex(index => index._id === id);
      // foundProduct.quantity += 1;
      // copiedProducts.splice(copiedIndex, 1, foundProduct);
      let final = processProduct(
        actionType.INCREASE_PRODUCT,
        id,
        copiedProducts
      );
      //console.log(final);
      return {
        ...state,
        //orderedProducts: [...copiedProducts]
        orderedProducts: [...final]
      };
    case actionType.DECREASE_PRODUCT:
      let minus_id = action.productInfo._id;
      let copiedProducts2 = [...state.orderedProducts];
      let final2 = processProduct(
        actionType.DECREASE_PRODUCT,
        minus_id,
        copiedProducts2
      );
      // let foundProduct2 = copiedProducts2.find(
      //   product => product._id === minus_id
      // );
      // let copiedIndex2 = copiedProducts2.findIndex(
      //   index => index._id === minus_id
      // );
      // foundProduct2.quantity -= 1;
      // if (foundProduct2.quantity <= 0) {
      //   foundProduct2.quantity = 0;
      // }
      // copiedProducts2.splice(copiedIndex2, 1, foundProduct2);
      return {
        ...state,
        orderedProducts: [...final2]
      };
    default:
      return state;
  }
};

export default reducer;
