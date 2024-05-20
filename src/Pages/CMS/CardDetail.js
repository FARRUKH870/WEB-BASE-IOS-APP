import React, { useState } from "react";
import "../../Card.css";
import Buttom from "../../components/Buttom";

function CardDetail() {
  const [activeButton, setActiveButton] = useState(null);
  const [tier, setTier] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardEffect, setCardEffect] = useState("Flip Effect");
  const [flipEffect, setFlipEffect] = useState("");
  const [attribute, setAttribute] = useState("Select...");
  const [level, setLevel] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [buttonImage, setButtonImage] = useState("");
  const [cardImage, setCardImage] = useState("");
  const [backPressed, setBackPressed] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "tier":
        setTier(value);
        break;
      case "cardName":
        setCardName(value);
        break;
      case "cardEffect":
        setCardEffect(value);
        break;
      case "flipEffect":
        setFlipEffect(value);
        break;
      case "attribute":
        setAttribute(value);
        break;
      case "level":
        setLevel(value);
        break;
      case "attack":
        setAttack(value);
        break;
      case "defense":
        setDefense(value);
        break;
      case "buttonImage":
        setButtonImage(value);
        break;
      case "cardImage":
        setCardImage(value);
        break;
      default:
        break;
    }
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="custom-card-container">
      <div className="card-type-container">
        <h2 className="custom-card-title">Card Type</h2>
        <div className="parallel">
          <div className="custom-card-info">
            <button
              className={`custom-button ${
                activeButton === "Monster" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Monster")}
            >
              Monster
            </button>
            <button
              className={`custom-button ${
                activeButton === "Magic" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Magic")}
            >
              Magic
            </button>
            <button
              className={`custom-button ${
                activeButton === "Trap" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Trap")}
            >
              Trap
            </button>
          </div>
        </div>
      </div>

      <div className="tier-container">
  <label htmlFor="tier">Tier:</label>
  <div className="tier-buttons">
    <button
      className={`custom-button ${
        activeButton === "1" ? "active" : ""
      }`}
      onClick={() => handleButtonClick("1")}
    >
      1
    </button>
    <button
      className={`custom-button ${
        activeButton === "2" ? "active" : ""
      }`}
      onClick={() => handleButtonClick("2")}
    >
      2
    </button>
    <button
      className={`custom-button ${
        activeButton === "3" ? "active" : ""
      }`}
      onClick={() => handleButtonClick("3")}
    >
      3
    </button>
    <button
      className={`custom-button ${
        activeButton === "4" ? "active" : ""
      }`}
      onClick={() => handleButtonClick("4")}
    >
      4
    </button>
    <button
      className={`custom-button ${
        activeButton === "5" ? "active" : ""
      }`}
      onClick={() => handleButtonClick("5")}
    >
      5
    </button>
    <button
      className={`custom-button ${
        activeButton === "tier" ? "active" : ""
      }`}
      onClick={() => handleButtonClick("tier")}
    >
      Tier
    </button>
    <button
      className={`custom-button ${
        activeButton === "nightmare" ? "active" : ""
      }`}
      onClick={() => handleButtonClick("nightmare")}
    >
      Nightmare
    </button>
  </div>
</div>


      <div className="card-name-container">
        <label htmlFor="cardName">Card Name:</label>
        <input
          type="text"
          name="cardName"
          value={cardName}
          onChange={handleChange}
          className="custom-card-input"
        />
      </div>

      <div className="effect-container">
        <label htmlFor="cardEffect">Card Effect:</label>
        <input
          type="text"
          name="cardEffect"
          value={cardEffect}
          onChange={handleChange}
          className="custom-card-input"
        />
        <label htmlFor="flipEffect">Flip Effect:</label>
        <input
          type="text"
          name="flipEffect"
          value={flipEffect}
          onChange={handleChange}
          className="custom-card-input"
        />
      </div>

      <div className="attributes-container">
        <label htmlFor="attribute">Attribute:</label>
        <input
          type="text"
          name="attribute"
          value={attribute}
          onChange={handleChange}
          className="custom-card-input"
        />
        <label htmlFor="level">Level:</label>
        <input
          type="text"
          name="level"
          value={level}
          onChange={handleChange}
          className="custom-card-input"
        />
        <label htmlFor="attack">Attack:</label>
        <input
          type="text"
          name="attack"
          value={attack}
          onChange={handleChange}
          className="custom-card-input"
        />
        <label htmlFor="defense">Defense:</label>
        <input
          type="text"
          name="defense"
          value={defense}
          onChange={handleChange}
          className="custom-card-input"
        />
      </div>

      <div className="images-container">
        <label htmlFor="buttonImage">Button Image:</label>
        <input
          type="file"
          name="buttonImage"
          onChange={handleChange}
          className="custom-card-input"
        />
        <label htmlFor="cardImage">Card Image:</label>
        <input
          type="file"
          name="cardImage"
          onChange={handleChange}
          className="custom-card-input"
        />
      </div>
      <Buttom />

    </div>
      );
}

export default CardDetail;
