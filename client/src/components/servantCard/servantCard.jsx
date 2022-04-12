import React from "react";
import { Link } from "react-router-dom";
import "./servantCard.css";

export default function Card({ name, className, rarity, lvMax, id, extraAssets }) {
  return (
    <Link to={"/Servants/" + id}>
    <div className="card-container">
      {/* <div>
        <h2 className="name">{name}</h2>
      </div> */}
      <div className="image-container">
      <img src={extraAssets.charaGraph.ascension[4]? extraAssets.charaGraph.ascension[4] : extraAssets.charaGraph.ascension[0]} alt="" width="310" height="400" />
      </div>
      {/* <div className="card-content">
        <h4 className="servantClassName">Class: {className}</h4>
         <h4 className="servantRarity">Rarity: {rarity}</h4>
         <h5 className="lvMax">Max level: {lvMax}</h5> 
      </div> */}
    </div>
    </Link>
  );
}