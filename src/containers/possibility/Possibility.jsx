import React from "react";
import "./possibility.css";
import possibilityImage from "../../assests/possibility.png";

export default function Possibility() {
  return (
    <div className="gtp3__possibility section__padding" id="possibility">
      <div className="gtp3__possibility-image">
        <img src={possibilityImage} alt="possiblity" />
      </div>
      <div className="gtp3__possibility-content">
        <h4>Request Early Acces to get Started </h4>
        <h1 className="gradient__text">
          The Possibility are beyond your imagenation
        </h1>
        <p>
          This is good for messure the possibilty in our life . Is that good
          predaction api. Nowday they veryu executon our life
        </p>

        <h4>Request Early Acces to get Started </h4>
      </div>
    </div>
  );
}
