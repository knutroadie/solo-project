import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import oppsSaga from './oppsSaga';
import detailSaga from './detailSaga';
import submitSaga from './submitSaga';
import deleteSaga from './deleteSaga';
import editSaga from './editSaga';
import likeSaga from './likeSaga';
import newOppSaga from './newOppSaga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    oppsSaga(),
    detailSaga(),
    submitSaga(),
    deleteSaga(),
    editSaga(),
    likeSaga(),
    newOppSaga(),
  ]);
}