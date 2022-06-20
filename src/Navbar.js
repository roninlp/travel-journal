import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="nav">
      <FontAwesomeIcon icon={faEarth} className="nav--logo"></FontAwesomeIcon>
      <h4 className="nav--title">my travel journal.</h4>
    </nav>
  );
}
