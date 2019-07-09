import React from "react";
import HomeButton from "../homepage/HomeButton";

const SingleProject = props => {
  const { proj } = props.location.state;
  return (
    <>
      <div className="container">
        <div className="single-proj">
          <div
            className="jumbotron bg-transparent"
            style={{ background: "none", textAlign: "center" }}
          >
            <h1 className="display-4">{proj.name}</h1>
            <p className="lead">{proj.title}</p>
            <hr className="my-4" />
            <span
              onClick={() => window.open(`${proj.link}`, "_blank")}
              className="card-title"
              style={{
                textDecoration: "underline",
                color: "blue"
              }}
            >
              {proj.link}
            </span>

            {proj.desc.map(par => (
              <p key={par}>{par}</p>
            ))}
            <hr className="my-4" />
            <p className="card-text">
              Instructions: <br />
              <span className="text-muted">
                {proj.tips.map(tip => (
                  <span key={tip}>
                    {tip} <br />
                  </span>
                ))}
              </span>
            </p>
            <hr className="my-4" />
            <button
              className="btn btn-primary btn-lg"
              onClick={() => window.open(`${proj.link}`, "_blank")}
            >
              Try it out
            </button>
            <br />

            <div className="mt-4">
              <img src={proj.pic} className="card-img-top" alt="..." />
            </div>
            <>
              <br />
              Code available at:{" "}
              <span
                onClick={() => window.open(`${proj.github}`, "_blank")}
                className="card-title"
                style={{ textDecoration: "underline", color: "blue" }}
              >
                {proj.github}
              </span>
              <hr className="my-4" />
              <strong>Technologies used for this project:</strong>
              <div style={techStyle}>
                {proj.tech.map(tech => (
                  <span key={tech} style={techStyle_item}>
                    <i className={tech}>
                      <span className="tooltiptext">{tech}</span>
                    </i>
                  </span>
                ))}
              </div>
            </>
            <br />
            <br />
            <br />
            <br />

            <HomeButton text={"Back to projects"} link={"/projects"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;

const techStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "10px 14% 30px",
  justifyContent: "center"
};

const techStyle_item = {
  height: "70px",
  width: "90px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  border: "1px solid",
  borderRadius: "10%",
  marginTop: "10px",
  fontFamily: "Roboto" /*"Amatic SC", */,
  fontWeight: "bold",
  //   textShadow:
  //     "-1px 0 palevioletred,0 1px palevioletred,1px 0 palevioletred,0 -1px palevioletred",
  fontSize: "1.2em",
  padding: "0.5px",
  letterSpacing: "1.5px",
  color: "black"
};
