import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";

//import { make_payment_start } from "../actions/cartAction";
import API from "../../config/api";
import axios from "axios";

function* cartSagaPaymentWorker(action) {
  yield console.log(action.paymentInfo);
}

export default function* watchCartSaga() {
  yield takeEvery(actionType.MAKE_PAYMENT_START, cartSagaPaymentWorker);
}
