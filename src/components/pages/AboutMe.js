import React from "react";
import HomeButton from "../homepage/HomeButton";
import MainPic from "../generic/MainPic";

const AboutMe = () => {
  let buttonPos = window.innerWidth < 401 ? "center" : "none";
  return (
    <div className="container about-container">
      <div className="bio">
        <span className="bio-text">
          <h2>Who is this guy?</h2>
          <p>
            Hi, my name is Roberto. I'm a software developer living in
            northeastern Massachusetts. I specialize in building web
            applications with React, Express, GraphQL. I have a Data Analytics
            Nanodegree. DevOps with Docker, Bash and SSH.
          </p>
          <HomeButton
            text={"Reach out"}
            link={"/contact"}
            pos={`${buttonPos}`}
          />
        </span>
        <MainPic />
      </div>

      <section>
        <div className="container tech-bio">
          <div className="tech-bio-text">
            <p>
              I love React for frontend development, though I, by no means, feel
              limited to any technology. For{" "}
              <strong>backend-development</strong>, I enjoy using Node, Express,
              GraphQL (Apollo and Yoga). I also have experience with Django, its
              REST framework, and Flask. For databases, I use MySQL, MongoDB and
              PostgreSQL.
            </p>
            <p>
              <strong>For deployment</strong>, though I love, free services like
              GitHub Pages and Netlify for single-page-applications, I now
              deploy to <strong>my own Linux VPS</strong>, where I run an
              automated Nginx reverse proxy for{" "}
              <strong>Docker containers</strong>. I containerize my apps and
              then ship them to the Web, with my own domains, with no hassle at
              all.
            </p>
            <HomeButton
              text={"Some of my Projects"}
              link={"/projects"}
              pos={`${buttonPos}`}
            />
            <br />
            <p>
              I have experience in <strong>data analysis</strong>. I completed
              an Udacity Data Analytics Nanodegree on January, 2019, which
              taught me the basics of data science and helped me improve (and
              put to use) my <strong>Python, SQL and statistics skills</strong>.
              I learned how to discover insights from chunk of raw data and
              communicate my findings with visualizations using libraries like
              NumPy, Pandas and MatPlotLib.{" "}
            </p>
            <br />
            <p>
              I use VS Code for editing, NPM and Yarn for package management,
              and GitHub for version control.
            </p>
          </div>
          <div className="tech-bio-pics">
            <div className="mongodb">
              <img
                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
                alt="ReactJS"
              />
            </div>
            <div className="mongodb">
              <img
                src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg"
                alt="NodeJS"
              />
            </div>
            <div className="mongodb">
              <img
                src="https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg"
                alt="GraphQL"
              />
            </div>
            <div className="mongodb">
              <img
                src="https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg"
                alt="MySQL"
              />
            </div>
            <div className="mongodb">
              <img
                src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"
                alt="MongoDB"
              />
            </div>

            <div className="mongodb">
              <img
                // style={{ transform: "scale(.7)" }}
                src="https://www.vectorlogo.zone/logos/postgresql/postgresql-horizontal.svg"
                alt="PostgreSQL"
              />
            </div>
            <div className="mongodb">
              <img
                src="https://www.vectorlogo.zone/logos/python/python-horizontal.svg"
                alt="Python"
              />
            </div>
            <div className="mongodb">
              <img
                src="https://www.vectorlogo.zone/logos/docker/docker-ar21.svg"
                alt="Docker"
              />
            </div>
            <div className="mongodb nginx">
              <img
                src="https://www.vectorlogo.zone/logos/nginx/nginx-ar21.svg"
                alt="NgInx"
              />
            </div>
            <div className="mongodb">
              <img
                src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg"
                alt="VS Code"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
