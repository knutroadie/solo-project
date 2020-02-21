import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* oppsSaga() {
    yield takeLatest('GET_OPPS', getOpps);
    yield put({ type: 'GET_OPPS' });
}

// this dispatches a GET to the server for all the data for all the items in the database
function* getOpps() {
    let response = yield axios.get('/api/opportunity')
    yield put({ type: 'SET_OPPS', payload: response.data })
    yield put({ type: 'FETCH_USER' });
}

export default oppsSaga;