import React from "react";
import HomeButton from "./homepage/HomeButton";
const AboutMe = () => {
  return (
    <div className="container">
      <br />
      <br />
      <h2 style={{ textAlign: "center" }}>Who am I?</h2>
      <section>
        <br />
        <br />
        <p> Glad you asked!</p>
        <div className="container" style={{ marginBottom: "200px" }}>
          <p>
            I'm a software engineer, who loves to develop web applications that
            satisfy specific needs. I consider myself a technical person, who
            likes to analyze details and arrive at accurate conclusions. I would
            say my interest in engineering arises, not so much from just
            "wanting to build stuff", though I enjoy this aspect of making web
            apps, but from the satisfaction and reward generated from
            identifying a problem and being able to build a solution for it.
            <br />
            <br />I have the necessary skills to help businesses establish their
            online presence and take advantage of the opportunities the web
            offers.{" "}
          </p>
          <p>
            Some of my favorite technologies for front-end development are
            ReactJS, Sanity CMS and Vanilla JavaScript. For backend-development
            I enjoy using NodeJS, ExpressJS, GraphQL and I also have experience
            with Django, its REST framework, and SQLite.
          </p>
          <p>
            For deployment, though I have tried, and love, free services like
            GitHub Pages and Netlify for single-page-applications, I now deploy
            to my own Linux VPS where I run an automated Nginx reverse proxy for
            Docker containers. I containerize my apps and then ship them to the
            Web with my own domains with no hassle at all.
          </p>
          <p>
            I use Visual Studio Code for code editing and NPM, Yarn, and Git for
            version control.
          </p>
          <p>
            I also have experience working in data analysis. I have completed an
            Udacity Data Analytics Nanodegree, which taught me the basics of
            data science and helped me improve (and put to use) my Python, SQL
            and statistics skills. I learned how to discover insights from chunk
            of raw data and communicate my findings using visualizations with
            libraries like NumPy, Pandas and MatPlotLib.{" "}
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>Get to know me better!</strong>
            <br />
            <br /> Shoot me a message to schedule an interview:
          </p>
          <HomeButton text={"Contact Me"} link={"/contact"} />
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
