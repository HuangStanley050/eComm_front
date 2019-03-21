import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";

import { make_payment_success } from "../actions/cartAction";
import API from "../../config/api";
import axios from "axios";

function* cartSagaPaymentWorker(action) {
  //yield console.log(action.paymentInfo);
  try {
    const result = yield axios.post(API.pay, action.paymentInfo);
    console.log(result);
    yield put(make_payment_success());
  } catch (e) {
    console.log(e);
  }
}

export default function* watchCartSaga() {
  yield takeEvery(actionType.MAKE_PAYMENT_START, cartSagaPaymentWorker);
}
