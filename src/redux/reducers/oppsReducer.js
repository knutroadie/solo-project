// this reducer holds all of the data for all of the objects from the database

const oppsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_OPPS':
            return action.payload;
        default:
            return state;
    }
}

export default oppsReducer;