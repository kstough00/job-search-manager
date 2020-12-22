import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { deletePosition } from "../redux/actions/positionActions";
import { connect } from "react-redux";

function PositionListItem({ position, deletePosition }) {
  const submitDelete = () => {
    deletePosition(position.id);
  };
  return (
    <div>
      <ul>
        <h4>
          <Link to={`/positions/${position.id}`}> {position.title}</Link>
        </h4>{" "}
        Company: {position.company} - ${position.salary}
        <FaTrash onClick={submitDelete} style={{ cursor: "pointer" }} />
      </ul>
    </div>
  );
}

export default connect(null, { deletePosition })(PositionListItem);
