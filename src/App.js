import React, { Component } from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <About />
      </div>
    );
  }
}

export default App;
