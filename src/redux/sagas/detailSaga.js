import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* detailSaga() {
    yield takeLatest('GET_DETAIL', getDetail);
}

// this saga dispatches a GET to the server for a targeted item in the database
// afterward it sets that item for the details view
function* getDetail(action) {
    let response = yield axios.get(`/api/opportunity/${action.payload}`);
    yield put({type: 'SET_OPP', payload: response.data[0]})
}

export default detailSaga;