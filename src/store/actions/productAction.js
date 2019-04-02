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

export const fetchProductsPage = currentPage => {
  return {
    type: actionType.FETCH_PRODUCTSPAGE_START,
    currentPage
  };
};

export const fetchProductsPage_success = documents => {
  return {
    type: actionType.FETCH_PRODUCTSPAGE_SUCCESS,
    documents
  };
};

export const fetchProductPage_fail = error => {
  return {
    type: actionType.FETCH_PRODUCTSPAGE_FAIL,
    error
  };
};

export const changePage = pageNo => {
  return {
    type: actionType.CHANGE_PAGE_NO,
    pageNo
  };
};
