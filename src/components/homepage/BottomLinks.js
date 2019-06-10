import React from "react";

const BottomLinks = () => {
  return (
    <>
      <div id="Connect" className="bottomLinks ">
        <h3
          style={{
            fontWeight: "500",
            fontSize: "2.5rem"
          }}
        >
          Let's Connect!
        </h3>
        <div className="bottomLinks-icons">
          <a
            className="btn btn-default"
            href="https://www.linkedin.com/in/roberto-soriano/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/free-social-icons-1/200/Linckedin-128.png"
              alt="LinkedIn"
              className=""
            />
          </a>
          <a
            className="btn btn-default"
            href="https://github.com/robertomsoriano"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/free-social-icons-1/200/Git-128.png"
              alt="GitHub"
              className=""
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default BottomLinks;
