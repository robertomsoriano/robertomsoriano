import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Success from "./components/Success";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <div className="container outside app">
            <div className="inner">
              <MyNavbar />
              <Switch>
                <Fragment>
                  <div className="App">
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutMe} />
                    <Route path="/education" component={AboutMe} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/success" component={Success} />
                  </div>
                </Fragment>
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
