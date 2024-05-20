import React from "react";
import "../../Monster.css";
import img from "../../Assets/trap.png";
import Buttom from "../../components/Buttom";

const Trap = () => {
  return (
      <div className="monster">
          <img
            className="img1"
            src={require("../../Assets/trap.png")}
            alt="Logo"
          />
          <div className="buttom2"> <Buttom/></div>
      </div>
  );
};

export default Trap;
