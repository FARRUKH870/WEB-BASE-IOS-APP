import React, { useState } from "react";
import "../../CardTier.css";
import { IoChevronForwardOutline } from "react-icons/io5";
import Buttom from "../../components/Buttom";
import img from '../../Assets/Logo.png';


import cardImage1 from "../../Assets/card1.png";
import cardImage2 from "../../Assets/card2.png";
import cardImage3 from "../../Assets/card3.png";
import cardImage4 from "../../Assets/card4.png";
import cardImage5 from "../../Assets/card5.png";
import cardImage6 from "../../Assets/card6.png";
import cardImage7 from "../../Assets/card7.png";
import cardImage8 from "../../Assets/card8.png";

const CardTier = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cardItems, setCardItems] = useState([
    {
      title: "Airknight Parshath",
      description: "This is the first card.",
      showDescription: false,
    },
    {
      title: "Amazoness Chain Warrior",
      description: "This is the second card.",
      showDescription: false,
    },
    {
      title: "Archfiend Soldier",
      description: "This is the third card.",
      showDescription: false,
    },
    {
      title: "Asura Priest",
      description: "This is the fourth card.",
      showDescription: false,
    },
    {
      title: "Book of Moon",
      description: "This is the fourth card.",
      showDescription: false,
    },
    {
      title: "Bottomless Trap Hole",
      description: "This is the fourth card.",
      showDescription: false,
    },
    {
      title: "Brain Control",
      description: "This is the fourth card.",
      showDescription: false,
    },
    {
      title: "Call of the haunted",
      description: "This is the fifth card.",
      showDescription: false,
    },
  ]);

  const filteredItems = cardItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDescription = (index) => {
    const newCardItems = [...cardItems];
    newCardItems[index].showDescription = !newCardItems[index].showDescription;
    setCardItems(newCardItems);
  };

  return (
    <div className="container">
      <div className="top-box"></div>
      <img className="login-logo1" src={require('../../Assets/Logo.png')} alt="Logo" />
      <div className="search-container">
        <input          
          type="text"
          placeholder="Search"
          className="input-field"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="card-container">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="card"
            onClick={() => toggleDescription(index)}
            style={{ backgroundImage: `url(${getCardImage(index)})` }} // Set background image dynamically
          >
            <h3>{item.title}</h3>
            {item.showDescription && (
              <p className="description">{item.description}</p>
            )}
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

const getCardImage = (index) => {
  switch (index) {
    case 0:
      return cardImage1;
    case 1:
      return cardImage2;
    case 2:
      return cardImage3;
    case 3:
      return cardImage4;
    case 4:
      return cardImage5;
    case 5:
      return cardImage6;
    case 6:
      return cardImage7;
    case 7:
      return cardImage8;
    default:
      return "";
  }
};

export default CardTier;
