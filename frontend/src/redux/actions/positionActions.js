export const getPositions = () => {
    return dispatch => {
        fetch(`http://localhost:3001/positions`)
        .then(res => res.json())
        .then(positions => dispatch({type: 'FETCH_POSITIONS_SUCCESS', payload: positions })
        );
    };
};