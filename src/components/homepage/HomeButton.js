import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  // margin: 1em;
  // margin-bottom: 20px
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: coral;
    border: 2.5px solid;
  }
`;

const HomeButton = props => {
  return (
    <>
      <div className="container">
        <div
          className="center"
          style={{
            display: "flex",
            justifyContent: "center",
            overflow: "hidden"
          }}
        >
          {/* <a href="/about">
            <button className="btn btn-dark btn-outline">
              Get to Know Me{"  "}
              <i
                className="fas fa-arrow-alt-circle-right"
                style={{ fontSize: "14px" }}
              />
            </button>
          </a> */}

          <Button as="a" href={props.link}>
            {props.text}
            {"  "}
            <i
              className="fas fa-arrow-alt-circle-right"
              style={{ fontSize: "14px" }}
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomeButton;
