import React from "react";
import { connect } from "react-redux";
import { getPositions } from "../redux/actions/positionActions";
import PositionListItem from "./PositionListItem";

class PositionIndex extends React.Component {
  componentDidMount() {
    this.props.boundGetPositions();
  }

  constructor() {
    super();
    this.state = {
      sort: false,
      search: "",
    };
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  handleClick = () => {
    this.setState((state) => ({
      sort: !state.sort,
    }));
  };

  sortedPositions = () => {
    return [...this.props.positions].sort(function (a, b) {
      let titleA = a.title.toUpperCase();
      let titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
  };

  render() {
    let filteredPositions = this.props.positions.filter((position) => {
      return (
        position.title
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <div>
        <h1>My Positions: </h1>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <br></br>
        <button onClick={this.handleClick}>Sort</button>
        {(this.state.sort ? this.sortedPositions() : filteredPositions).map(
          (position) => (
            <PositionListItem key={position.id} position={position} />
          )
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ positions }) => {
  return {
    positions: positions.all,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boundGetPositions: () => dispatch(getPositions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PositionIndex);
