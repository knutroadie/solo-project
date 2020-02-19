const newOppReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEW_OPPS':
            return action.payload;
        default:
            return state;
    }
}

export default newOppReducer;