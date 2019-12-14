import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The count is {this.state.counter}</h1>
        <button data-test="increment-button" onClick={this.increment}>
          +
        </button>
        <button data-test="decrement-button" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}

export default App;
