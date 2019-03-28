import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import cartSaga from "./cartSaga";
import productSaga from "./productSaga";

export default function* rootSaga() {
  yield all([authSaga(), cartSaga(), productSaga()]);
}
