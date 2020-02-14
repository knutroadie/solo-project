import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* submitSaga() {
    yield takeLatest('SUBMIT_OPP', submitOpp);
}

function* submitOpp(action) {
    console.log('in submitOpp generator', action.payload);
    let response = yield axios.post(`/api/opportunity`);
    yield put({ type: 'GET_OPPS' });
}

export default submitSaga;