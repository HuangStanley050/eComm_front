import { takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";

function* productSagaWorker() {
  yield console.log("doing work");
}

export default function* watchProductAdd() {
  yield takeEvery(actionType.ADD_PRODUCT, productSagaWorker);
}
