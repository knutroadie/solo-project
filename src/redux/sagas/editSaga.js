import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* editSaga() {
    yield takeLatest('SUBMIT_EDIT', editOpp);
}

// this dispatches a PUT to the server
// updating a targeted row in the database
// afterward, it does a get to refresh the page
function* editOpp(action) {
    console.log('in editOpp', action);
    yield axios.put(`/api/opportunity/${action.payload.id}`, action.payload);
    yield put({ type: 'GET_OPPS' });
}

export default editSaga;