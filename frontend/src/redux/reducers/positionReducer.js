function positionReducer(state = { positions: [] }, action) {
    switch(action.type) {
        case "FETCH_POSITIONS_SUCCESS" :
            return {...state, positions: action.payload };
        default:
            return state;
        
    }
}

export default positionReducer;