import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
/*global localStorage */
import { make_payment_success } from "../actions/cartAction";
import API from "../../config/api";
import axios from "axios";

function* cartSagaPaymentWorker(action) {
  try {
    const result = yield axios({
      method: "post",
      url: API.pay,
      data: action.paymentInfo,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token
      }
    });
    console.log(result);
    yield put(make_payment_success(result));
  } catch (e) {
    console.log(e);
  }
}

export default function* watchCartSaga() {
  yield takeEvery(actionType.MAKE_PAYMENT_START, cartSagaPaymentWorker);
}
