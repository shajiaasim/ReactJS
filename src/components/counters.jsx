import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  counters = [
    { id: 1, value: 0 },
    { id: 2, value: 1 },
    { id: 3, value: 2 },
    { id: 4, value: 3 }
  ];
  state = {
    counters: this.counters,
    totalCount: this.totalCountt
  };

  totalCountt = () => {
    var count = 0;

    for (let i in this.counters) {
      count += i.value;
    }

    return count;
    //  .reduce((acc, val) => acc + val, 0);
  };

  handleDelete = id => {
    console.log("handle del", id);
    const counters = this.state.counters.filter(count => count.id != id);
    this.setState({ counters });
  };

  handleIncrement = id => {
    console.log("handle inc", id);
    let totalCount = this.state.totalCount;
    console.log("totalCount: ", totalCount);
    const counters = this.state.counters.map(counter => {
      if (counter.id == id) {
        counter.value++;
        totalCount++;
      }
      return counter;
    });

    this.setState({ counters, totalCount });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleResetAll = () => {
    const counters = this.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        <button
          onClick={this.handleResetAll}
          className="btn btn-primary btn-sm m-2"
        >
          Reset All
        </button>

        <span>{this.state.totalCount}</span>

        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            increment={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
