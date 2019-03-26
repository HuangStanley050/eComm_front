import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
/*global localStorage */
import {
  register_user_success,
  login_success,
  login_fail,
  clear_error
} from "../actions/authAction";
import axios from "axios";
import API from "../../config/api";

function* authRegisterSagaWorker(action) {
  //yield console.log(action.userInfo);
  try {
    yield axios.post(API.register, action.userInfo);
    //console.log(result);
    yield put(register_user_success());
  } catch (e) {
    console.log(e.response.data.error);
  }
}

function* authLoginSagaWorker(action) {
  //yield console.log("this is login saga");
  try {
    let result = yield axios.post(API.login, action.userInfo);
    yield localStorage.setItem("token", result.data.token);
    //console.log(result);
    yield put(login_success(result.data.userInfo));
    yield put(clear_error());
  } catch (e) {
    console.log(e.response.data.error);
    yield put(login_fail(e.response.data.error));
  }
}

function* authSagaWatcher() {
  yield takeEvery(actionType.REGISTER_USER_START, authRegisterSagaWorker);
  yield takeEvery(actionType.LOGIN_START, authLoginSagaWorker);
}

export default authSagaWatcher;
