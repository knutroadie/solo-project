import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* submitSaga() {
    yield takeLatest('SUBMIT_OPP', submitOpp);
}

function* submitOpp(action) {
    // console.log('in submitOpp generator', action.payload);
    // let response = yield axios.post(`/api/opportunity`);
    // yield put({ type: 'GET_OPPS' });
    yield console.log('in submit opp', action.payload)
    try {
        yield axios.post(`/api/opportunity`, action.payload);
        yield put({ type: 'GET_OPPS' })
    } catch (error) {
        console.log('Error in submitOpp generator', error);
        alert('Could not update data at this time. Try again later');
    }
}

export default submitSaga;