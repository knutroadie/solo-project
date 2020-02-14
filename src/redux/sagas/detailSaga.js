import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* detailSaga() {
    yield takeLatest('GET_DETAIL', getDetail);
}

function* getDetail(action) {
    console.log('in getDetail', action.payload);
    let response = yield axios.get(`/api/opportunity/${action.payload}`);
    yield put({type: 'SET_OPP', payload: response.data[0]})
}

export default detailSaga;