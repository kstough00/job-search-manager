function positionReducer(state = { all: [] }, action) {
    switch (action.type) {
        case "FETCH_POSITIONS_SUCCESS":
            return { ...state, all: action.payload };
        
        case "CREATE_POSITION_SUCCESS":
            return {...state, all: state.all.concat(action.payload)}
        default:
            return state;
    }
}

export default positionReducer;