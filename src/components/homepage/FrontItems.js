import React from "react";

const FrontItems = () => {
  return (
    <>
      <div className="wrapper">
        <div className="one">
          <span className="icons btn">
            <a className="btn btn-lg btn-outline-dark" href="/about">
              <i className="fas fa-address-card fa-lg pull-left" />
              <br />
              <p>Who I am</p>
            </a>
          </span>
        </div>
        <div className="two">
          <span className="icons btn">
            <a className="btn btn-lg btn-outline-dark" href="/projects">
              <i className="fas fa-hard-hat fa-lg pull-left" />
              <p>Projects</p>
            </a>
          </span>
        </div>
        <div className="three">
          <span className="icons btn">
            <a className="btn btn-lg btn-outline-dark" href="/education">
              <i className="fas fa-graduation-cap fa-lg pull-left" />
              <p>Education</p>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default FrontItems;
