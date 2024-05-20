import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import '../App.css';
import { IoMdTrophy } from "react-icons/io";
import { FaListAlt } from "react-icons/fa";

const Buttom = () => {
    return (
        <nav className="bottom-bar">
  <div className="bottom-item2">
  <FaListAlt className="icon-white" /> 
    <Link to="/card-list">
      <span className="icon-text">CardList</span> 
    </Link>
  </div>
  <div className="bottom-item2">
  <IoMdTrophy className="icon-white" />
    <Link to="/champions">
      <span className="icon-text">Champions</span> 
    </Link>
  </div>
</nav>

    );
};

export default Buttom;
