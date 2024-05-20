// src/Champions.js
import React from 'react';
import '../../Chmapions.css';
import '../../Assets/Logo.png';

const championsData = [
  { name: "Ros Modilevski", season: "Season 2" },
  { name: "Ros Modilevski", season: "Season 1" }
];

const Champions = () => {
  return (
    <div className="champions-container">
      <header className="champions-header">
        <img src="../../Assests/Logo.png" alt="Logo" className="logo" />
        <h1>Champions of the Cube</h1>
      </header>
      <div className="champions-list">
        {championsData.map((champion, index) => (
          <div key={index} className="champion-card">
            <div className="champion-info">
              <p className="champion-name">{champion.name}</p>
              <p className="champion-season">{champion.season}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Champions;
