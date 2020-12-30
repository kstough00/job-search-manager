import React from "react"; //imports react library from react
import { Link } from "react-router-dom"; //import link to make use of link functionality on our webpage

export default function Nav() {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          "https://thumbs.dreamstime.com/z/job-opportunity-written-brown-paper-white-paper-teardrop-44969284.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
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
