import React, { Component } from "react";
//Controlled componenet
//No internal state
class Counter extends Component {
  //remove state as this is a controlled component
  //  state = { value: this.props.counter.value };

  style = {
    fontWeight: "bold",
    fontSize: 10
  };

  constructor(props) {
    super(props);
    //   this.increment = this.increment.bind(this);
  }

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span style={this.style} className={this.class()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.increment(this.props.counter.id)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          {" "}
          Delete
        </button>
      </div>
    );
  }

  class() {
    var { value } = this.props.counter.id;
    let className = "badge m2 badge-";
    className += value === 0 ? "warning" : "primary";
    return className;
  }

  //   increment() {
  //     this.setState({ count: this.state.value + 1 });
  //     this.state.value++;
  //   }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
