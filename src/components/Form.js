import React, { useState } from 'react';
import '../Card.css';

function Form() {
  const [formData, setFormData] = useState({
    cardType: 'Monster',
    cardEffect: 'Flip Effect',
    tier: '',
    cardName: '',
    attribute: 'Select...',
    monsterType: 'Select...',
    level: '',
    attack: '',
    defense: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="card-container">
      <h2>Card Type</h2>
      <div className="card-info">
        <label htmlFor="cardType">Card Type:</label>
        <select name="cardType" id="cardType" value={formData.cardType} onChange={handleChange}>
          <option value="Monster">Monster</option>
          <option value="Magic">Magic</option>
          <option value="Trap">Trap</option>
        </select>
        <label htmlFor="cardEffect">Card Effect:</label>
        <select name="cardEffect" id="cardEffect" value={formData.cardEffect} onChange={handleChange}>
          <option value="Flip Effect">Flip Effect</option>
          <option value="Normal Effect">Normal Effect</option>
          <option value="Continuous Effect">Continuous Effect</option>
        </select>
        <label htmlFor="tier">Tier:</label>
        <input type="text" name="tier" id="tier" value={formData.tier} onChange={handleChange} />
        <label htmlFor="cardName">Card Name:</label>
        <input type="text" name="cardName" id="cardName" value={formData.cardName} onChange={handleChange} />
        <label htmlFor="attribute">Attribute:</label>
        <select name="attribute" id="attribute" value={formData.attribute} onChange={handleChange}>
          <option value="Select...">Select...</option>
          <option value="Dark">Dark</option>
          <option value="Divine">Divine</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
        <label htmlFor="monsterType">Monster Type:</label>
        <select name="monsterType" id="monsterType" value={formData.monsterType} onChange={handleChange}>
          <option value="Select...">Select...</option>
          <option value="Dragon">Dragon</option>
          <option value="Spellcaster">Spellcaster</option>
          <option value="Warrior">Warrior</option>
        </select>
        <label htmlFor="level">Level:</label>
        <input type="text" name="level" id="level" value={formData.level} onChange={handleChange} />
        <label htmlFor="attack">Attack:</label>
        <input type="text" name="attack" id="attack" value={formData.attack} onChange={handleChange} />
        <label htmlFor="defense">Defense:</label>
        <input type="text" name="defense" id="defense" value={formData.defense} onChange={handleChange} />
      </div>
    </div>
  );
}

export default Form;
