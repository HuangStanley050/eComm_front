import * as actionType from "./actionTypes";

export const add_to_cart = productInfo => {
  return {
    type: actionType.ADD_TO_CART,
    productInfo
  };
};

export const increaseProd = productInfo => {
  return {
    type: actionType.INCREASE_PRODUCT,
    productInfo
  };
};
