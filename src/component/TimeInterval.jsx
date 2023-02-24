import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
    console.log("run constructor");
  }

  componentDidMount = () => {
    console.log("run componentDidMount");
    this.intervalId = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
    console.log(this.intervalId);
  };

  componentDidUpdate = () => {
    console.log("run componentDidUpdate");
  };

  componentWillUnmount = () => {
    console.log("run componentWillUnmount");
    clearInterval(this.intervalId);
  };

  render() {
    console.log("run render");
    const { timer } = this.props;
    return (
      <div>
        <h1>{timer}</h1>

        <h2>{this.state.timer}</h2>
      </div>
    );
  }
}

export default Counter;
