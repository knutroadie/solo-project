import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* likeSaga() {
    yield takeLatest('CLICK_LIKE', submitLike);
}

function* submitLike(action) {
    // console.log('in submitOpp generator', action.payload);
    // let response = yield axios.post(`/api/opportunity`);
    // yield put({ type: 'GET_OPPS' });
    yield console.log('in submitLike', action.payload)
    try {
        yield axios.post(`/api/like`, action.payload);
        // yield put({ type: 'GET_OPPS' })
    } catch (error) {
        console.log('Error in submitLike generator', error);
        alert('Could not update data at this time. Try again later');
    }
}

export default likeSaga;