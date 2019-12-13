import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div data-test="component-app">
        <h1>The count is {this.state.counter}</h1>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default App;
