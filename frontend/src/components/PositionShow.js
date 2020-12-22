// import React from "react";
// import { connect } from "react-redux";
// import { getPosition } from "../redux/actions/positionActions";
// import { FaTrash } from "react-icons/fa";
// import { deletePosition } from "../redux/actions/positionActions";
// import PositionListItem from "./PositionListItem";

// function PositionShow({ position, deletePosition }) {
//   const submitDelete = () => {
//     deletePosition(position.id);
//   };
//   return (
//     <div>
//       <ul>
//         Company: {position.company} - ${position.salary}
//         <FaTrash onClick={submitDelete} style={{ cursor: "pointer" }} />
//       </ul>
//     </div>
//   );
// }

// export default connect(null, { deletePosition })(PositionShow);

import React from "react";
import PositionListItem from "./PositionListItem";
import { connect } from "react-redux";
import PositionIndex from "./PositionIndex";

class PositionShow extends React.Component {
  render() {
    return (
      <div>
        <h1>Position</h1>
        {this.props.position.title}
      </div>
    );
  }
}

const mapStateToProps = ({ positions }, props) => {
  const positionId = +props.match.params.id;
  const position = positions.all.find(function (p) {
    return p.id === positionId;
  });
  return {
    position,
  };
};

export default connect(mapStateToProps, { PositionIndex })(PositionShow);
