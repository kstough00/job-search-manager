export const getPositions = () => {
    return (dispatch) => {
        fetch(`http://localhost:3001/positions`)
        .then((res) => res.json())
        .then((positions) => 
            dispatch({ type: "FETCH_POSITIONS_SUCCESS", payload: positions })
        );
    };
};

export const createPosition = data => {
    return dispatch => {
        const position = { position: data };
        fetch(`http://localhost:3001/positions`, {
            method: 'POST',
            body: JSON.stringify(position),
        })
        .then((res) => res.json())
        .then((position) => 
        dispatch({ type: "CREATE_POSITION_SUCCESS", payload: position })
        );
    }
}