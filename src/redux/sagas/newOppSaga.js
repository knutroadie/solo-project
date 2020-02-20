import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* newOppSaga() {
    yield takeLatest('GET_NEW_OPPS', getNewOpps);
}

// this dispatches a GET to the server for items newly added to the database
function* getNewOpps() {
    console.log('in getNewOpps generator');
    let response = yield axios.get('/api/newOpp')
    console.log(response.data);
    yield put({ type: 'SET_NEW_OPPS', payload: response.data })
    yield put({ type: 'FETCH_USER' });
}

export default newOppSaga;