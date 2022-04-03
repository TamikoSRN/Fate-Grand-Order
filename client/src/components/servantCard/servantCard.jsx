import React from "react";
import "./servantCard.css";

export default function Card({ name, className, rarity, lvMax }) {
  return (
    <div className="card-container">
      <div>
        <h2 className="name">{name}</h2>
      </div>
      {/* <div className="image-container">
        <img src={image} alt="" width="300px" height="300px" />
      </div> */}
      <div className="card-content">
        <h4 className="servantClassName">Class: {className}</h4>
         <h4 className="servantRarity">Rarity: {rarity}</h4>
         <h5 className="lvMax">Max level: {lvMax}</h5> 
      </div>
    </div>
  );
}