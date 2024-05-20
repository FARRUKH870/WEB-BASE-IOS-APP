import React from "react";
import "../../Monster.css";

import img2 from "../../Assets/monster.png";
import Buttom from "../../components/Buttom";
import img from '../../Assets/Logo.png';


const Monster = () => {
  return (
      <div className="monster">
          <img
            className="img1"
            src={require("../../Assets/monster.png")}
            alt="Logo"
          />
          <div className="buttom2"> <Buttom/></div>
      </div>
  );
};

export default Monster;
