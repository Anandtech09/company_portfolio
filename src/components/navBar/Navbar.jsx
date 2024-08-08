import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {
    const [showContactInfo, setShowContactInfo] = useState(false);

    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    const toggleContactInfo = () => {
        setShowContactInfo(!showContactInfo);
    };

    return (
        <div className="nav-container">
            <div className="nav-logo">
                <img
                    src="./src/assets/images/zenix.png"
                    alt="logo"
                    className="logo"
                />
            </div>
            <div className="contents">
                <ul>
                    <li onClick={() => handleScroll('services')}>SERVICES</li>
                    <li onClick={() => handleScroll('projects')}>PROJECTS</li>
                    <li onClick={() => handleScroll('about-us')}>ABOUT US</li>
                    <li onClick={toggleContactInfo}>CONTACT</li>
                </ul>
            </div>
            {showContactInfo && (
                <div className="contact-info">
                    <button className="close-button" onClick={toggleContactInfo}>X</button>
                    <h2>Contact Us</h2>
                    <p>Phone: +91 9400628129</p>
                    <p>Email: zenix09@gmail.com</p>
                    <p>Address: Gptc, Nedumangadu, Trivandrum</p>
                </div>
            )}
        </div>
    );
};

export default Navbar;
