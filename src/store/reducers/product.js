import * as actionType from "../actions/actionTypes";
const initialState = {
  loading: false,
  products: [],
  totalPages: 0
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
      let documents = action.documents;
      let page = documents / 3;
      page = parseInt(page.toFixed());
      if (documents % 3) {
        page += 1;
      }
      return {
        ...state,
        loading: false,
        totalPages: page
      };
    default:
      return state;
  }
};

export default reducer;
