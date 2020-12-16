function positionReducer(state = { all: [] }, action) {
    switch (action.type) {
        case "FETCH_POSITIONS_SUCCESS":
            return { ...state, all: action.payload };
        default:
            return state;
    }
}

export default positionReducer;