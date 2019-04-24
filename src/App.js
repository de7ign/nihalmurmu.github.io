import React, { Component } from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
