import * as actionType from "../actions/actionTypes";
const initialState = {
  loading: false,
  products: [],
  totalPages: 0,
  currentPage: 1,
  error: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_PRODUCT:
    case actionType.FETCH_PRODUCTSPAGE_START:
      return {
        ...state,
        loading: true
      };
    case actionType.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case actionType.FETCH_PRODUCTSPAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        totalPages: action.documents.totalPages,
        products: [...action.documents.docs]
      };
    case actionType.FETCH_PRODUCTSPAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: {
          ...state.error,
          code: action.error.status,
          msg: action.error.data.error
        }
      };
    case actionType.CLEAR_FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: {}
      };
    case actionType.CHANGE_PAGE_NO:
      return {
        ...state,
        currentPage: action.pageNo
      };
    case actionType.LOGOUT_CLEAR:
      return {
        ...state,
        products: []
      };
    default:
      return state;
  }
};

export default reducer;
