import React from "react";
import styled from "styled-components";
import { underline } from "ansi-colors";
import HomeButton from "../homepage/HomeButton";
const NotFound = () => {
  return (
    <>
      <NF>
        <div className="not-found">
          <h1>
            <underline>404</underline>
          </h1>
        </div>
        <span>This page doesn't exist yet!</span>
        <br />
        <HomeButton text={"Go back Home"} link={"/"} />
      </NF>
    </>
  );
};

export default NotFound;

const NF = styled.div`
display: grid;
grid-template-columns: 1fr
grid-auto-rows: 500px -1px;
justify-items: center;
align-items: center;
margin: 300px 0 700px 0;
`;
