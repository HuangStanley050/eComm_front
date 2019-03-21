import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import { register_user_start } from "../actions/authAction";
import axios from "axios";
import API from "../../config/api";

function* authSagaWorker(action) {
  //yield console.log(action.userInfo);
  try {
    let result = yield axios.post(API.register, action.userInfo);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

function* authSagaWatcher() {
  yield takeEvery(actionType.REGISTER_USER_START, authSagaWorker);
}

export default authSagaWatcher;
