import React from "react";
import { ArrowRight } from "../svg/Svgs";
import Container from "../components/Container";

const Join = (props) => {
  return (
    <Container>
      <div className="join-container">
        <p> Username </p>
        <input />
        <p> Room </p>
        <input />
        <div className="button">
          <ArrowRight color="black" size="30px" />
        </div>
      </div>
    </Container>
  );
};

export default Join;
