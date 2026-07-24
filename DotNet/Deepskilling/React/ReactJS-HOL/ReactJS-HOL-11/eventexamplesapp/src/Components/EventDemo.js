import React, { Component } from "react";

class EventDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: ""
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  incrementValue() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  sayHello() {
    this.setState({ message: "Hello! This is a static message." });
  }

  increment() {
    // The Increase button invokes multiple methods
    this.incrementValue();
    this.sayHello();
  }

  decrement() {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }

  sayWelcome(text) {
    this.setState({ message: `${text}` });
  }

  handlePress(e) {
    // synthetic event
    this.setState({ message: "I was clicked" });
  }

  render() {
    return (
      <div className="event-demo">
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br />
        <button onClick={() => this.sayWelcome("welcome")}>Say Welcome</button>
        <button onClick={this.handlePress}>OnPress</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default EventDemo;
