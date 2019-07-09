import React from "react";
import { Link } from "react-router-dom";
import bookstore from "../../images/bookstore.png";
import npipic from "../../images/npipic.png";

const ProjectsGrid = () => {
  let props = [
    {
      name: "BookStore",
      title: "Book Store App using the MERN stack",
      link: "https://bookstore.robertmsoriano.com",
      desc: [
        "Bookstore app for keeping inventory, making transactions and printing invoices.",
        "This project was developed using MongoDB, ExpressJS, ReactJS and NodeJS (MERN) stack. JWT and localStorage are used for authentication."
      ],
      pic: bookstore,
      tips: [
        "(1) Register a new user account.",
        "(2) Add your own books (or items).",
        "(3) Perform any CRUD operation.",
        "* New items will be automatically deleted after 3 minutes",
        "** Changes to existing items will not be effected."
      ],
      tech: [
        "fab fa-js-square fa-2x",
        "fab fa-react fa-2x",
        "fab fa-node fa-2x",
        "fas fa-database fa-1x",
        "fab fa-docker fa-2x"
      ],
      github: "https://github.com/robertomsoriano/books-app"
    },
    {
      name: "OneStop",
      title: "NPI Search Tool",
      link: "https://npi.robertmsoriano.com",
      desc: [
        "A National Provider Identification (NPI) and ICD-10 diagnosis code lookup tool.",
        "I build this tool to improve my efficiency in my current job. Using this tool saves me an average of 25 seconds per search!"
      ],
      pic: npipic,
      tips: [
        "•Try it with NPI: 1225232366",
        "•Use it to look for facilities or individual doctors.",
        "•Search Diagnosis codes",
        "•Verify if a Diagnosis is POA Exempt."
      ],
      tech: [
        "fab fa-js-square fa-2x",
        "fab fa-react fa-2x",
        "fab fa-node fa-2x",
        "fab fa-docker fa-2x"
      ],
      github: "https://github.com/robertomsoriano/npi-lookup"
    }
  ];
  return (
    <div className="projects-grid">
      {props.map(proj => (
        <div className="card mb-5 project-card" style={style} key={proj.name}>
          <Link
            to={{
              pathname: `/projects/${proj.name}`,
              state: { proj }
            }}
            style={style}
          >
            <div className="card-header">{proj.name}</div>
            <div className="card-body">
              <span
                onClick={() => window.open(`${proj.link}`, "_blank")}
                className="card-title"
                style={{ textDecoration: "underline", color: "blue" }}
              >
                {proj.link}
              </span>
              <p className="card-text">{proj.desc[0]}</p>
            </div>
            <img src={proj.pic} className="card-img-top" alt="..." />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;

const style = {
  background: "rgba(241, 220, 189, 0.335)",
  textDecoration: "none",
  color: "black",
  alignContent: "center",
  padding: "10px"
};
