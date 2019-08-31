import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  // color: palevioletred;
  color: #47995a;
  font-size: 1.1em;
  // margin: 1em;
  // margin-bottom: 20px
  padding: 0.25em 1em;
  // border: 2px solid palevioletred;
  border: 2px solid #47995a;
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

const HomeButton = ({ text, link, direction = "right", pos = "center" }) => {
  let arrowClass = `fas fa-arrow-alt-circle-${direction}`;
  return (
    <>
      <div className="home-button">
        <div
          className="center"
          style={{
            display: "flex",
            justifyContent: pos,
            overflow: "hidden"
          }}
        >
          <Button as="a" href={link}>
            {text}
            {"  "}
            <i className={arrowClass} style={{ fontSize: "14px" }} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomeButton;
