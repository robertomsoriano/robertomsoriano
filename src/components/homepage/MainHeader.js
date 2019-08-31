import React from "react";
const MainHeader = props => {
  return (
    <div className="jumbotron-container">
      <div
        className="jumbotron jumbotron-fluid transparent"
        style={{ background: "none", textAlign: "center" }}
      >
        <h1 className="display-1 mt-5">
          Roberto
          <span className="header-break">
            <br />
          </span>
          <span className="header-space"> </span>
          Soriano
        </h1>
        <h5 className="lead">Full Stack Developer!</h5>
      </div>
    </div>
  );
};

export default MainHeader;
