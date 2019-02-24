import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from 'helpers/api';
import { apiUrl } from 'helpers/constants';
import { logUserIn } from 'routines';


export function* userLogIn() {
  try {
    console.log(process.env, 'sa');
    yield put(logUserIn.request());
    const data = yield call(api.get, apiUrl.users);
    yield put(logUserIn.success(data));
  } catch (error) {
    yield put(logUserIn.failure(error));
  } finally {
    yield put(logUserIn.fulfill());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(logUserIn.TRIGGER, userLogIn),
  ]);
}
