import * as actionType from "./actionTypes";

export const add_product = productData => {
  return {
    type: actionType.ADD_PRODUCT,
    productData
  };
};
