import React from "react";
import { connect } from "react-redux";
import PositionIndex from "./PositionIndex";
import TaskToggle from "./TaskToggle";

class PositionShow extends React.Component {
  render() {
    return (
      <div>
        <h1>Position</h1>
        {this.props.position.title}
        <h2>Company - Salary</h2>
        {this.props.position.company} - ${this.props.position.salary}
        <div>
          <h1>Tasks: </h1>
          <ul>
            Submit Resume <TaskToggle />
          </ul>
          <ul>
            Send follow up Email <TaskToggle />
          </ul>
          <ul>
            Interview Process <TaskToggle />
          </ul>
          <ul>
            Offer Accepted <TaskToggle />
          </ul>
        </div>
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
