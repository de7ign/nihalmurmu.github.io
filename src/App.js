import React, { Component } from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import ReactGA from "react-ga";

class App extends Component {
  componentDidMount() {
    ReactGA.initialize("UA-138685124-2");
    ReactGA.pageview(window.location.pathname);
  }

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
