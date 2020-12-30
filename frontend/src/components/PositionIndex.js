import React from "react";
import { connect } from "react-redux";
import { getPositions } from "../redux/actions/positionActions";
import PositionListItem from "./PositionListItem";

class PositionIndex extends React.Component {
  componentDidMount() {
    this.props.getPositions();
  }
  render() {
    return (
      <div>
        <h1>My Positions: </h1>
        {this.props.positions.map((position) => (
          <PositionListItem key={position.id} position={position} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ positions }) => {
  //mapstatetoprops has access to our state 'positions'
  return {
    positions: positions.all, // then we return our state
  };
};

export default connect(mapStateToProps, { getPositions })(PositionIndex);
