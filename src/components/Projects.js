import React, { Component } from "react";
import ProjectBanner from "./projects/ProjectBanner";
import ProjectsGrid from "./projects/ProjectsGrid";
import GHButton from "./projects/GHButton";

export default class Projects extends Component {
  render() {
    return (
      <>
        <div className="container" style={{ marginBottom: "300px" }}>
          <ProjectBanner />
          <ProjectsGrid />
          <GHButton />
        </div>
      </>
    );
  }
}
