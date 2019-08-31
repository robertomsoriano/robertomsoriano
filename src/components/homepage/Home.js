import React from "react";
import MainHeader from "./MainHeader";
import Intro from "./Intro";

const Home = () => {
  return (
    <>
      <div className="home">
        <MainHeader />
        <Intro />
        <div className="home-icon">
          <img
            src="https://img.icons8.com/cotton/64/000000/launched-rocket.png"
            alt="rocket"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Home;
