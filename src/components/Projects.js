import React, { Component } from "react";
import ProjectBanner from "./projects/ProjectBanner";
// import ProjectCard from "./projects/ProjectCard";
import ProjectsGrid from "./projects/ProjectsGrid";
import GHButton from "./projects/GHButton";

export default class Projects extends Component {
  render() {
    return (
      <>
        <div className="container">
          <ProjectBanner />
          {/* <ProjectCard /> */}
          <ProjectsGrid />
          <GHButton />
        </div>
      </>
    );
  }
}
