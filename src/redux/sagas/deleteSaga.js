import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteSaga() {
    yield takeLatest('DELETE_OPP', deleteOpp);
}

//this dispatches a DELETE to the server targeting a specific ID
// after that, it triggers a GET to refresh the list
function* deleteOpp(action) {
    console.log('in deleteOpp', action.payload);
    let response = yield axios.delete(`/api/opportunity/${action.payload}`);
    yield put({ type: 'SET_OPP', payload: response.data[0] });
    yield put({ type: 'GET_OPPS' });
}

export default deleteSaga;