import * as actionType from "./actionTypes";

export const add_to_cart = productInfo => {
  return {
    type: actionType.ADD_TO_CART,
    productInfo
  };
};
