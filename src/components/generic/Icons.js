import React from "react";

const Icons = () => {
  let iconsList = [
    // ["fas fa-terminal fa-1x", "Terminal"],
    // ["fas fa-code fa-1x", "Markup"],
    ["fab fa-js fa-2x", "JavaScript"],
    ["fab fa-node fa-2x", "NodeJS"],
    ["fab fa-react fa-2x", "ReactJS"],
    ["fab fa-github fa-2x", "GitHub"],
    ["fab fa-docker fa-2x", "Docker"],
    ["fas fa-plane-departure fa-2x", "Deployment"]
  ];

  return (
    <div className="toolbox">
      <h2>My ToolBox</h2>
      <div className="thumbnails">
        {iconsList.map(icon => (
          <span className="thumbnail" key={icon}>
            <i className={icon[0]}>
              <span className="tooltiptext">{icon[1]}</span>
            </i>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Icons;
