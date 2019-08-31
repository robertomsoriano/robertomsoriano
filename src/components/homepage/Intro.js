import React from "react";
import HomeButton from "./HomeButton";

const Intro = () => {
  return (
    <div className="intro">
      <span>
        <h4>
          My passion is to develop web applications that save energy, time and
          money!
        </h4>
      </span>
      <span className="homepage-button">
        <HomeButton text={"Get to Know Me"} link={"/about"} />
      </span>
    </div>
  );
};

export default Intro;
