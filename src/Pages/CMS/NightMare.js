import React from "react";
import "../../Monster.css";
import img from "../../Assets/nightmare.png";
import Buttom from "../../components/Buttom";

const NightMare = () => {
  return (
      <div className="monster">
          <img
            className="img1"
            src={require("../../Assets/nightmare.png")}
            alt="Logo"
          />
          <div className="buttom2"> <Buttom/></div>
      </div>
  );
};

export default NightMare;
