import React from "react";
import styled from "styled-components";
import { underline } from "ansi-colors";
const Success = () => {
  return (
    <>
      <ThankYou>
        <div className="thank-you">
          <h1>
            <underline>Thank You</underline>
          </h1>
        </div>
        <span>I will get back to you!</span>
      </ThankYou>
    </>
  );
};

export default Success;

const ThankYou = styled.div`
  display: grid;
  grid-template-columns: 1fr
  grid-auto-rows: 500px -10px;
  justify-items: center;
  align-items: center;
  margin: 300px 0 700px 0;

`;
