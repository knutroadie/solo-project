const oppsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_OPPS':
            return action.payload;
        default:
            return state;
    }
}

const oppReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_OPP':
            return action.payload;
        default:
            return state;
    }
}

export default oppsReducer;