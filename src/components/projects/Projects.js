import React, { Component } from "react";
import ProjectBanner from "./ProjectBanner";
import ProjectsGrid from "./ProjectsGrid";
import GHButton from "./GHButton";
import Icons from "../generic/Icons";

export default class Projects extends Component {
  render() {
    return (
      <>
        <div className="projects-container">
          <ProjectBanner />
          <ProjectsGrid />
          <Icons />
          <GHButton />
        </div>
      </>
    );
  }
}
