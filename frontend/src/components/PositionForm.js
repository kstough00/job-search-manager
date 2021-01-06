import React, { Component } from "react"; //imports react library from react
import { createPosition } from "../redux/actions/positionActions";
import { connect } from "react-redux";

class PositionForm extends Component {
  state = {
    title: "",
    company: "",
    salary: "",
  }; //state contructor. sets state for us to use later

  submit = (e) => {
    e.preventDefault();
    this.props.createPosition(this.state);
    this.setState({
      title: "",
      company: "",
      salary: "",
    });
    this.props.history.push("/positions");
  };

  render() {
    return (
      <div>
        <h1>Add Position</h1>
        <form onSubmit={this.submit}>
          Title:{" "}
          <input
            onChange={(e) => this.setState({ title: e.target.value })}
            type="text"
            value={this.state.title}
          />
          Company:{" "}
          <input
            onChange={(e) => this.setState({ company: e.target.value })}
            type="text"
            value={this.state.company}
          />
          Salary:{" "}
          <input
            onChange={(e) => this.setState({ salary: e.target.value })}
            type="text"
            value={this.state.salary}
          />
          <input type="submit" value="Add position" />
        </form>
      </div>
    );
  }
}

export default connect(null, { createPosition })(PositionForm);
