import React from "react";

const ProjectBanner = () => {
  return (
    <div
      className="jumbotron jumbotron-fluid transparent"
      style={{ background: "none", textAlign: "center" }}
    >
      <div className="container">
        <h1 className="display-4">Projects</h1>
        <p className="lead">
          These are some of the web applications I have developed. Feel free to
          visit them and play around!
        </p>
      </div>
    </div>
  );
};

export default ProjectBanner;
