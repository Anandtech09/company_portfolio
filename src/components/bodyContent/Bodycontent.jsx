import React, { useState, useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import "./Bodycontent.css";

const Bodycontent = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone } = formData;
        let isValid = true;
        let errors = { name: '', email: '', phone: '' };

        if (!name) {
            errors.name = "Name is required.";
            isValid = false;
        }
        if (!email) {
            errors.email = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email address is invalid.";
            isValid = false;
        }
        if (!phone) {
            errors.phone = "Phone number is required.";
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            errors.phone = "Phone number must be 10 digits.";
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
            togglePopup();
        } else {
            setErrors(errors);
        }
    };

    return (
        <div className="image-text-content">
            <div className="bodycontent-container" data-aos="zoom-in-up">
                <div className="bodycontent-heading">
                    <h1>What is <span>Zenix?</span></h1>
                </div>
                <div className="bodycontent-text">
                    <p>
                        <span>Zenix</span> is a new-generation company passionate about designing
                        and developing cutting-edge software and hardware projects that inspire and transform industries.
                    </p>
                </div>
                <button onClick={togglePopup}>Let's Get Started...</button>
            </div>
            <div className="into-image" data-aos="zoom-in-up">
                <img src="/assets/images/file.png" alt="zenix" />
            </div>
            {showPopup && (
                <div className="popup-overlay" onClick={togglePopup}>
                    <div className="popup" onClick={e => e.stopPropagation()} data-aos="zoom-in-up">
                        <h2>Enter Your Contact Information</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                />
                                {errors.name && <div className="error">{errors.name}</div>}
                            </label>
                            <label>
                                Email:
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                />
                                {errors.email && <div className="error">{errors.email}</div>}
                            </label>
                            <label>
                                Phone:
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    value={formData.phone} 
                                    onChange={handleChange} 
                                />
                                {errors.phone && <div className="error">{errors.phone}</div>}
                            </label>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={togglePopup}>Close</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Bodycontent;
