import React from "react";

const GHButton = () => {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "auto",
          marginBottom: "2rem"
        }}
      >
        <button
          className="btn btn-primary btn-lg"
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
