import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    //counters[0].value++也会导致state中第0项的value变成5
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    //把state里的数组和需要操作的对象拷贝下来操作
  };

  handleRest = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => {
      return c.id !== counterID;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleRest}
          className="btn btn-primary btn-sm m-2"
        >
          Rest
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onRest={this.handleRest}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
