export const getPositions = () => {
  return (dispatch) => {
    fetch(`http://localhost:3001/positions`)
      .then((res) => res.json())
      .then((positions) =>
        dispatch({ type: "FETCH_POSITIONS_SUCCESS", payload: positions })
      );
  };
};

export const createPosition = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/positions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ position: data }),
    })
      .then((res) => res.json())
      .then((position) =>
        dispatch({ type: "CREATE_POSITION_SUCCESS", payload: position })
      );
  };
};

export const deletePosition = (positionId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/positions/${positionId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(({ id }) => dispatch({ type: "DELETE_POSITION", payload: id }));
  };
};

// export const getPosition = () => {
//   return (dispatch) => {
//     fetch(`http://localhost:3001/positions/:id`)
//       .then((res) => res.json())
//       .then((position) =>
//         dispatch({ type: "FETCH_POSITION_SUCCESS", payload: position })
//       );
//   };
// };
