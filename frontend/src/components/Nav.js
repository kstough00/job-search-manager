import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul style={{ textAlign: "left" }}>
        <Link to="/">Home </Link>
        <br></br>
        <Link to="/positions">My Positions </Link>
        <br></br>
        <Link to="/positions/new">Add applied Position </Link>
      </ul>
    </div>
  );
}
