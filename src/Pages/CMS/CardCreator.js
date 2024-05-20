// src/CardCreator.js
import React, { useState } from 'react';
import '../../CardCreator.css';

const CardCreator = () => {
  const cardTypes = ["Monster", "Magic", "Trap"];
  const tiers = ["1", "2", "3", "4", "5", "Jar", "Nightmare"];
  const attributes = ["Fire", "Water", "Earth", "Wind", "Light", "Dark"];
  const monsterTypes = ["Dragon", "Warrior", "Spellcaster", "Zombie", "Machine", "Aqua", "Pyro", "Rock", "Insect", "Thunder", "Fish", "Sea Serpent", "Reptile", "Psychic", "Divine-Beast"];

  const [selectedCardType, setSelectedCardType] = useState("Monster");
  const [selectedTier, setSelectedTier] = useState("1");
  const [cardName, setCardName] = useState("");
  const [cardEffect, setCardEffect] = useState("");
  const [flipEffect, setFlipEffect] = useState(false);
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [selectedMonsterType, setSelectedMonsterType] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");

  const handleSave = () => {
    // Implement save functionality
    console.log({
      selectedCardType,
      selectedTier,
      cardName,
      cardEffect,
      flipEffect,
      selectedAttribute,
      selectedMonsterType,
      attack,
      defense,
    });
  };

  return (
    <div className="card-creator">
      <h1>CARD TYPE:</h1>
      <div className="card-type">
        {cardTypes.map(type => (
          <button
            key={type}
            className={`card-type-button ${selectedCardType === type ? 'selected' : ''}`}
            onClick={() => setSelectedCardType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      {selectedCardType === "Monster" && (
        <>
          <div className="tiers">
            {tiers.map(tier => (
              <button
                key={tier}
                className={`tier-button ${selectedTier === tier ? 'selected' : ''}`}
                onClick={() => setSelectedTier(tier)}
              >
                {tier}
              </button>
            ))}
          </div>
          <select
            className="attribute-picker"
            value={selectedAttribute}
            onChange={e => setSelectedAttribute(e.target.value)}
          >
            <option value="" disabled>Select Attribute</option>
            {attributes.map(attr => (
              <option key={attr} value={attr}>{attr}</option>
            ))}
          </select>
          <select
            className="monster-type-picker"
            value={selectedMonsterType}
            onChange={e => setSelectedMonsterType(e.target.value)}
          >
            <option value="" disabled>Select Monster Type</option>
            {monsterTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <div className="stats">
            <input
              type="number"
              className="attack"
              placeholder="Attack"
              value={attack}
              onChange={e => setAttack(e.target.value)}
            />
            <input
              type="number"
              className="defense"
              placeholder="Defense"
              value={defense}
              onChange={e => setDefense(e.target.value)}
            />
          </div>
          <div className="flip-effect">
            <label>Flip Effect</label>
            <input
              type="checkbox"
              checked={flipEffect}
              onChange={() => setFlipEffect(!flipEffect)}
            />
          </div>
        </>
      )}
      {(selectedCardType === "Magic" || selectedCardType === "Trap") && (
        <>
          <div className="tiers">
            {tiers.map(tier => (
              <button
                key={tier}
                className={`tier-button ${selectedTier === tier ? 'selected' : ''}`}
                onClick={() => setSelectedTier(tier)}
              >
                {tier}
              </button>
            ))}
          </div>
        </>
      )}
      <input
        type="text"
        className="card-name"
        placeholder="Card Name..."
        value={cardName}
        onChange={e => setCardName(e.target.value)}
      />
      <textarea
        className="card-effect"
        placeholder="Card Effect..."
        value={cardEffect}
        onChange={e => setCardEffect(e.target.value)}
      ></textarea>
      <button className="image-button">Select Image</button>
      <button className="save-button" onClick={handleSave}>Save</button>
    </div>
  );
};

export default CardCreator;
