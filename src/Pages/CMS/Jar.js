import React from "react";
import "../../Monster.css";
import img from "../../Assets/tier2.png";
import Buttom from "../../components/Buttom";

const Jar = () => {
  return (
      <div className="monster">
          <img
            className="img1"
            src={require("../../Assets/tier2.png")}
            alt="Logo"
          />
          <div className="buttom2"> <Buttom/></div>
      </div>
  );
};

export default Jar;
