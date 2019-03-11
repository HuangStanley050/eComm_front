import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import { add_product_success } from "../actions/productAction";
import axios from "axios";

function* productSagaWorker(action) {
  //console.log(action.productData);
  try {
    const result = yield axios({
      method: "post",
      url:
        "https://webdevpractice-infamousgodhand.c9users.io:8081/api/file/uploadProduct",
      data: action.productData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    yield put(add_product_success());
  } catch (e) {
    console.log(e);
  }
}

export default function* watchProductAdd() {
  yield takeEvery(actionType.ADD_PRODUCT, productSagaWorker);
}
