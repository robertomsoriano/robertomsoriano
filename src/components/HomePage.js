import React, { Component, Fragment } from "react";
import MainHeader from "./MainHeader";
// import FrontItems from "./homepage/FrontItems";
import MainPic from "./homepage/MainPic";
import HomeButton from "./homepage/HomeButton";
import Icons from "./homepage/Icons";

// import Footer from "./Footer";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="bgImage" />
        <MainHeader />
        <MainPic />
        <HomeButton text={"Get to Know Me"} link={"/about"} />
        <Icons />
      </Fragment>
    );
  }
}

export default HomePage;
