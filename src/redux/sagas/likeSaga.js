import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* likeSaga() {
    yield takeLatest('CLICK_LIKE', submitLike);
}

// this dispatches a POST to the database representing a user-click LIKE
function* submitLike(action) {
    console.log('in submitLike generator', action.payload);
    try {
        yield axios.post(`/api/like`, { id: action.payload });
    } catch (error) {
        console.log('Error in submitLike generator', error);
        alert('Could not update data at this time. Try again later');
    }
}

export default likeSaga;