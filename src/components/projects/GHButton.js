import React from "react";

const GHButton = () => {
  return (
    <>
      <div className="container gh-button">
        <button
          className="btn btn-lg"
          onClick={() =>
            window.open(
              `https://github.com/robertomsoriano?tab=repositories`,
              "_blank"
            )
          }
        >
          Other Projects on Github
        </button>
      </div>
    </>
  );
};

export default GHButton;
