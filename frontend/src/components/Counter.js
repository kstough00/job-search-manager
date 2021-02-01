import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  toggleNumber = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleNumber}> Click me!</button>
        {this.state.number}
      </div>
    );
  }
}

export default Counter;
