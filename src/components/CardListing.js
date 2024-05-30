import React, { useState } from "react";
import "../App.css"; // Import your stylesheet
import Buttom from "./Buttom";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";

const CardListing = () => {
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

  const addCard = () => {
    const newCardTitle = prompt("Enter the title for the new card:");
    if (newCardTitle) {
      const newCardDescription = prompt(
        "Enter the description for the new card:"
      );
      if (newCardDescription) {
        setCardItems([
          ...cardItems,
          {
            title: newCardTitle,
            description: newCardDescription,
            showDescription: false,
          },
        ]);
      }
    }
  };

  const toggleDescription = (index) => {
    const newCardItems = [...cardItems];
    newCardItems[index].showDescription = !newCardItems[index].showDescription;
    setCardItems(newCardItems);
  };

  return (
    <div className="container">
      <div className="top-box">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            className="input-field"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="plus-sign">
          <IoAddOutline size={80} />
        </div>
      </div>
      <div className="card-container">
        {filteredItems.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.title}</h3>

            <span>
              <IoChevronForwardOutline className="icon-arrow" />
            </span>
          </div>
        ))}
      </div>
      <Buttom />
    </div>
  );
};

export default CardListing;
