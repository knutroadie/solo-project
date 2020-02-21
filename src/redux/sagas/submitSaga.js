import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* submitSaga() {
    yield takeLatest('SUBMIT_OPP', submitOpp);
}

// dispatches a POST for a new submission to the database
function* submitOpp(action) {
    yield console.log('in submit opp', action.payload)
    try {
        yield axios.post(`/api/opportunity`, action.payload);
        yield put({ type: 'GET_OPPS' });
        yield put({ type: 'GET_NEW_OPPS' });
    } catch (error) {
        console.log('Error in submitOpp generator', error);
        alert('Could not update data at this time. Try again later');
    }
}

export default submitSaga;