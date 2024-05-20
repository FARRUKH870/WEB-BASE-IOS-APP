import React from "react";
import "../../Monster.css";
import "../../Magic.css";
import img from "../../Assets/magic.png";
import Buttom from "../../components/Buttom";
const Magic = () => {
  return (
    <div className="monster">
      <img
        className="img1"
        src={img}
        alt="Enemy Controller"
      />
      <div className="card-content">
        <h1 className="card-title">Enemy Controller</h1>
        <p className="card-description">
          Activate one of the following effects: <br />
          - Change the battle position of an opponent’s monster or <br />
          - Tribute a monster you control to take control of a face-up monster your opponent controls until the end of the turn.
        </p>
        <div className="rating">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">☆</span>
        </div>
        <div className="button-container">
          <Buttom/>  {/* Assuming Button is the correct component name */}
        </div>
      </div>
    </div>
  );
};

export default Magic;
