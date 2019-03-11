import { takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
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
    yield console.log(result);
  } catch (e) {
    console.log(e);
  }
}

export default function* watchProductAdd() {
  yield takeEvery(actionType.ADD_PRODUCT, productSagaWorker);
}
