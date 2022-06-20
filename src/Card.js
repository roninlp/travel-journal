import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
    <div className="card">
      <figure className="card--fig">
        <img className="card--img" src={props.item.imageUrl} alt={props.item.title} />
      </figure>
      <div className="card--info">
        <div className="card--location">
          <FontAwesomeIcon icon={faLocationDot} className="card--location-dot" />
          <p className="card--country">{props.item.location}</p>
          <a href={props.item.googleMapsUrl} className="card--map-link">
            View on Google Maps
          </a>
        </div>
        <h2 className="card--title">{props.item.title}</h2>
        <h4 className="card--date">
          {props.item.startDate} - {props.item.endDate}
        </h4>
        <p className="card-desc">{props.item.description}</p>
      </div>
    </div>
  );
}
