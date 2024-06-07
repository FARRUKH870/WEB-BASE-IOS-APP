import React, { useState } from "react";
import "../../App.css";
import Buttom from "../../components/Buttom";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";

const ChampionTab = () => {
  const [championItems, setChampionItems] = useState([
    { title: "Season 1" },
    { title: "Season 2" },
    { title: "Season 3" },
  ]);

  const addChampion = () => {
    const newChampionTitle = prompt("Enter the title for the new champion:");
    if (newChampionTitle) {
      setChampionItems([
        ...championItems,
        { title: newChampionTitle },
      ]);
    }
  };

  return (
    <div className="container">
      <div className="top-box">
        <h1 className="champions-header">Champions</h1>
        <div className="plus-sign" onClick={addChampion}>
          <IoAddOutline size={80} />
        </div>
      </div>
      <div className="card-container">
        {championItems.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.title}</h3>
            <span>
              <IoChevronForwardOutline className="icon-arrow" />
            </span>
          </div>
        ))}
      </div>
      <Buttom/>
    </div>
  );
};

export default ChampionTab;
