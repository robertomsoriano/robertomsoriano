import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Success from "./components/Success";
import SingleProject from "./components/projects/SingleProject";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <div className="container outside app">
            <div className="inner">
              <MyNavbar />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutMe} />
                <Route path="/education" component={AboutMe} />
                <Route exact path="/projects" component={Projects} />
                <Route path="/projects/:name" component={SingleProject} />
                <Route path="/contact" component={Contact} />
                <Route path="/success" component={Success} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
