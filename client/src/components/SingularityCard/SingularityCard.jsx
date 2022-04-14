import React from "react";
import { Link } from "react-router-dom";
import "./SingularityCard.css";

export default function SingularityCard({ id, banner, originalLongName, age }) {
  return (
    <Link to={`/grandOrders/${id}`}>
      <div className="card-container">
          <img src={banner} alt="" width="310" height="400"  className="singularityBanner" />
          <h2>{age}</h2>
          <h1>{originalLongName}</h1>
      </div>
    </Link>
  );
}
