import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import {
  register_user_start,
  register_user_success
} from "../actions/authAction";
import axios from "axios";
import API from "../../config/api";

function* authRegisterSagaWorker(action) {
  //yield console.log(action.userInfo);
  try {
    let result = yield axios.post(API.register, action.userInfo);
    console.log(result);
    yield put(register_user_success());
  } catch (e) {
    console.log(e.response.data.error);
  }
}

function* authLoginSagaWorker(action) {
  yield console.log("this is login saga");
  try {
    let result = yield axios.post(API.login, action.userInfo);
    console.log(result);
  } catch (e) {
    console.log(e.response.data.error);
  }
}

function* authSagaWatcher() {
  yield takeEvery(actionType.REGISTER_USER_START, authRegisterSagaWorker);
  yield takeEvery(actionType.LOGIN_START, authLoginSagaWorker);
}

export default authSagaWatcher;
