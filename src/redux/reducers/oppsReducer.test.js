import oppsReducer from './oppsReducer';

describe('testing oppsReducer', () =>{
    test('should return a payload', ()=> {
        let state = [];
        let action = {type: 'SET_OPPS'};
        let returnedState = oppsReducer(state, action);
        expect(returnedState).toEqual(action.payload)
    });
});