import React from "react";
import StarFilled from "../assets/StarFilled.svg";
import StarEmpty from "../assets/StarFilled.svg";

function Stars() {
  return (
    <div className="star-container">
      <img className="star" src={StarFilled} alt="Star1" />
      <img className="star" src={StarFilled} alt="Star2" />
      <img className="star" src={StarFilled} alt="Star3" />
    </div>
  );
}

export default Stars;
