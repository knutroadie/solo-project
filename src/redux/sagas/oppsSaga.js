import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* oppsSaga() {
    yield takeLatest('GET_OPPS', getOpps);
    // yield takeLatest('GET_DETAIL', getDetail);
    // yield takeLatest('SET_OPPS', setOpps);
}

function* getOpps() {
    console.log('in getOpps generator');
    let response = yield axios.get('/api/opportunity')
    console.log(response.data);
    yield put({ type: 'SET_OPPS', payload: response.data })
    yield put({ type: 'FETCH_USER' })
}

// function* setOpps(action) {
//     try {
//         let opportunity = {
//             id: action.payload.id,
//             name: action.payload.name,
//             description: action.payload.description,
//             contact: action.payload.contact,
//             email: action.payload.email,
//             phone: action.payload.phone,
//             web_address: action.payload.web_address,
//             social: action.payload.social,
//             street_address: action.payload.street_address,
//             city: action.payload.city,
//             zip: action.payload.zip,
//             date_added: action.payload.date_added
//         }
//         let response = yield axios.post('/api/opportunity', opportunity)
//         yield put({ type: 'GET_OPPS' })
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

export default oppsSaga;