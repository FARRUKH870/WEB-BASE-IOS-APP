import React, { useState, useEffect } from 'react';
import "../App.css";
import img from '../Assets/Logo.png';
import { IoLogoTableau } from "react-icons/io5";

const Loader = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <div className="login-container">
            <img className="login-logo" src={require('../Assets/Logo.png')} alt="Logo" />
            <div>
            <IoLogoTableau className="spinner"/>
            </div>
        </div>
    );
};

export default Loader;
