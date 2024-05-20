import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";

const ChampionDetail = () => {
  const [seasonNumber, setSeasonNumber] = useState('');
  const [image, setImage] = useState(null);
  const history = useHistory();

  const handleSave = () => {
    console.log("Season Number:", seasonNumber);
    console.log("Image:", image);
    // Redirect to the ChampionsPage after saving
    history.push('/champions');
  };

  return (
    <div className="champion-container">
      <div className='champion-top-box'>
        <button onClick={() => history.goBack()}><IoArrowBack /></button>
        <h2>Champion Details</h2>
        <button onClick={handleSave}>Save</button>
      </div>
      <div className="champion-form-container">
        <label htmlFor="seasonNumber">Season Number:</label>
        <input
          type="text"
          id="seasonNumber"
          value={seasonNumber}
          onChange={(e) => setSeasonNumber(e.target.value)}
        />
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
    </div>
  );
};

export default ChampionDetail;
