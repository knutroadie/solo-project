const oppsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_OPPS':
            return action.payload;
        default:
            return state;
    }
}

export default oppsReducer;