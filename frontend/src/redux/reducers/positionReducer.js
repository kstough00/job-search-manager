function positionReducer(state = { all: [] }, action) {
  switch (action.type) {
    case "FETCH_POSITIONS_SUCCESS":
      return { ...state, all: action.payload };

    case "CREATE_POSITION_SUCCESS":
      return { ...state, all: state.all.concat(action.payload) };

    case "DELETE_POSITION":
      return {
        ...state,
        all: state.all.filter((position) => position.id !== action.payload),
      };

    default:
      return state; //returns state if there is no change
  }
}

export default positionReducer;

// case "EDIT_POSITION":
//       return state.map((position) => {
//         if (position.id != action.payload.id) {
//           return position;
//         } else {
//           return action.payload;
//         }
//       });
