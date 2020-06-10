import React, { useState } from "react";
import { ArrowRight } from "../svg/Svgs";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const Join = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const refuseSubmit = (event) => {
    if (!username || !room) {
      event.preventDefault();
      alert("Both fields must be filled");
    }
  };

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
        <Link
          onClick={refuseSubmit}
          to={`/chat?name=${username}&room=${room}`}
          className="button"
        >
          <ArrowRight color="black" size="30px" />
        </Link>
      </div>
    </Container>
  );
};

export default Join;
