import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/navbar/MyNavbar";
import Footer from "./components/generic/Footer";
import "./App.css";
import Home from "./components/homepage/Home";
import AboutMe from "./components/pages/AboutMe";
import Projects from "./components/projects/Projects";
import Contact from "./components/pages/Contact";
import Success from "./components/pages/Success";
import SingleProject from "./components/projects/SingleProject";
import NotFound from "./components/pages/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <div className="app-wrapper">
            <MyNavbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={AboutMe} />
              <Route path="/education" component={AboutMe} />
              <Route exact path="/projects" component={Projects} />
              <Route path="/projects/:name" component={SingleProject} />
              <Route path="/contact" component={Contact} />
              <Route path="/success" component={Success} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
