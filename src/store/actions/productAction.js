import * as actionType from "./actionTypes";

export const add_product = productData => {
  return {
    type: actionType.ADD_PRODUCT,
    productData
  };
};

export const add_product_success = () => {
  return {
    type: actionType.ADD_PRODUCT_SUCCESS
  };
};

export const fetchProductsPage = () => {
  return {
    type: actionType.FETCH_PRODUCTSPAGE_START
  };
};

export const fetchProductsPage_success = documents => {
  return {
    type: actionType.FETCH_PRODUCTSPAGE_SUCCESS,
    documents
  };
};
