import { all, takeEvery, put } from 'redux-saga/effects';
import { AuthActionTypes } from '../actions/authActions';


function* handleLogin() {
  // Perform side effects like API calls, etc.
  console.log('User logged in');
}

function* handleLogout() {
  console.log('User logged out');
}

export function* authSaga() {
  yield all([
    takeEvery(AuthActionTypes.login, handleLogin),
    takeEvery(AuthActionTypes.logout, handleLogout),
  ]);
}

