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

export const decreaseProd = productInfo => {
  return {
    type: actionType.DECREASE_PRODUCT,
    productInfo
  };
};

export const remove_from_cart = productInfo => {
  return {
    type: actionType.REMOVE_FROM_CART,
    productInfo
  };
};

export const make_payment_start = paymentInfo => {
  return {
    type: actionType.MAKE_PAYMENT_START,
    paymentInfo
  };
};
