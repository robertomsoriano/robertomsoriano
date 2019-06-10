import React from "react";

const Icons = () => {
  let iconsList = [
    "fas fa-terminal fa-1x",
    "fab fa-docker fa-2x",
    "fab fa-js fa-2x",
    "fab fa-node fa-2x",
    "fab fa-react fa-2x",

    "fab fa-github fa-2x"
  ];

  return (
    <div style={{ marginBottom: "150px" }}>
      <div className="thumbnails">
        {iconsList.map(icon => (
          <span className="thumbnail" key={icon}>
            <i className={icon} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Icons;
