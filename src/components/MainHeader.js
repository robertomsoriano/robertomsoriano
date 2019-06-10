import React from "react";
const MainHeader = props => {
  return (
    <div
      className="jumbotron jumbotron-fluid transparent"
      style={{ background: "none", textAlign: "center" }}
    >
      <div className="container">
        <h1 className="display-4">Roberto Soriano</h1>
        <p className="lead">Full Stack Developer</p>
      </div>
    </div>
  );
};

export default MainHeader;
