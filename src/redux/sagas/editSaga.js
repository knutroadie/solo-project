import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* editSaga() {
    yield takeLatest('SUBMIT_EDIT', editOpp);
}

function* editOpp(action) {
    console.log('in editOpp', action);
    let response = yield axios.put(`/api/opportunity/${action.payload.id}`, action.payload);
    yield put({ type: 'SET_OPP', payload: response.data[0] });
    yield put({ type: 'GET_OPPS' });
}

export default editSaga;