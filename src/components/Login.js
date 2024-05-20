import React, { useState, useEffect } from 'react';
import "../App.css";
import img from '../Assets/Logo.png';

const Login = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <div className="login-container">
            <img className="login-logo" src={require('../Assets/Logo.png')} alt="Logo" />
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter six digits"
                    value={inputValue}
                    onChange={handleInputChange}
                    maxLength={6}
                />
            </div>
        </div>
    );
};

export default Login;
