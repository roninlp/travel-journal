import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
  return (
    <div className="card">
      <img className="card--image" />
      <div className="card--info">
        <FontAwesomeIcon icon={faLocationDot} />
      </div>
    </div>
  );
}
