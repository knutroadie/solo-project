// this reducer holds the three most recent additions to the database

const newOppReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEW_OPPS':
            return action.payload;
        default:
            return state;
    }
}

export default newOppReducer;