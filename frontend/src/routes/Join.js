import React, { useState } from "react";
import { ArrowRight } from "../svg/Svgs";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const Join = (props) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Container>
      <div className="join-container">
        <p> Username </p>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <p> Room </p>
        <input value={room} onChange={(event) => setRoom(event.target.value)} />
        <Link to={`/chat?name=${username}&room=${room}`} className="button">
          <ArrowRight color="black" size="30px" />
        </Link>
      </div>
    </Container>
  );
};

export default Join;
