// this reducer holds a single object for detail view

const detailReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_OPP':
            return action.payload;
        default:
            return state;
    }
}

export default detailReducer;