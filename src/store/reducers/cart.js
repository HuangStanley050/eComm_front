import * as actionType from "../actions/actionTypes";

const initialState = {
  orderedProducts: [],
  orderHistory: [],
  totalPrice: null,
  loading: false
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

const processPrice = products =>
  products
    .map(item => {
      return item.quantity * item.price;
    })
    .reduce((a, b) => a + b, 0);

const reducer = (state = initialState, action) => {
  let price;
  let id;
  let copiedProducts;
  let final;

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
      id = action.productInfo._id;
      copiedProducts = [...state.orderedProducts];

      final = processProduct(actionType.INCREASE_PRODUCT, id, copiedProducts);

      price = processPrice(final);

      return {
        ...state,
        totalPrice: price,
        orderedProducts: [...final]
      };
    case actionType.DECREASE_PRODUCT:
      id = action.productInfo._id;
      copiedProducts = [...state.orderedProducts];
      final = processProduct(actionType.DECREASE_PRODUCT, id, copiedProducts);
      price = processPrice(final);
      return {
        ...state,
        orderedProducts: [...final],
        totalPrice: price
      };
    case actionType.REMOVE_FROM_CART:
      id = action.productInfo._id;
      copiedProducts = [...state.orderedProducts];
      final = copiedProducts.filter(item => item._id !== id);
      price = processPrice(final);
      return {
        ...state,
        orderedProducts: [...final],
        totalPrice: price
      };
    case actionType.MAKE_PAYMENT_SUCCESS:
      return {
        ...state,
        orderedProducts: [],
        totalPrice: null
      };
    case actionType.FETCH_ORDER_HISTORY_START:
      return {
        ...state,
        loading: true
      };
    case actionType.FETCH_ORDER_HISTORY_SUCCESS:
      //console.log(action.products);
      return {
        ...state,
        loading: false,
        orderHistory: [...action.products]
      };
    case actionType.LOGOUT_CLEAR:
      return {
        ...state,
        orderHistory: []
      };
    default:
      return state;
  }
};

export default reducer;
