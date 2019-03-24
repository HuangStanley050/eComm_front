import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
/*global localStorage*/
import {
  add_product_success,
  fetchProductsPage_success
} from "../actions/productAction";
import API from "../../config/api";
import axios from "axios";

function* productSagaWorker(action) {
  //console.log(action.productData);
  try {
    const result = yield axios({
      method: "post",
      url: API.addProduct,
      data: action.productData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.token
      }
    });
    yield put(add_product_success());
  } catch (e) {
    console.log(e);
  }
}

function* fetchSagaWorker(action) {
  try {
    const result = yield axios.get(API.fetchProducts + action.currentPage);
    console.log(result);
    yield put(fetchProductsPage_success(result.data));
  } catch (err) {
    console.log(err);
  }
}

export default function* watchProductAdd() {
  yield takeEvery(actionType.ADD_PRODUCT, productSagaWorker);
  yield takeEvery(actionType.FETCH_PRODUCTSPAGE_START, fetchSagaWorker);
}
