import React, { Component } from "react";
import "./App.css";
import Counter from "./component/TimeInterval";
import photo from "./component/photo.jpg";

class App extends Component {
  state = {
    fullName: "Saif Soua",
    bio: "lorem lorem lorem lorem lorem",
    imgSrc: { photo },
    show: false,
  };
  toggleVisibility = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleVisibility}>show</button>
        {this.state.show ? (
          <div>
            <h1>{this.state.fullName}</h1>
            <p>{this.state.bio}</p>
            <img src={photo} alt="photo.jpg" />
          </div>
        ) : (
          <p> button show </p>
        )}
        <Counter />
      </div>
    );
  }
}

export default App;
