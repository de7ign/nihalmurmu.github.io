import React, { Component } from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
