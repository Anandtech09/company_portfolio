import React from "react";
import './About.css';

const About = ({ sections }) => {
    return (
        <div id="about-us">
        <div className="about-cont">
        <section className="container" id="section-2">
            <div className="row">
                {sections.map((section, index) => (
                    <div key={index} id={`column${index + 1}`}>
                        <div className="column-title">
                            <h2>{section.title}</h2>
                        </div>
                        <p>{section.content}</p>
                        <a href={section.link} target="_blank" className="button">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        <div className="line"></div>
        <div className="copyright">
        <p>&copy; 2024 Zenix. All rights reserved.</p>
        <span id="social-media">
            <img id="linkedin-icon" src="./public/assets/svg/linkedin.svg" alt="" />
            <img id="fb" src="./public/assets/svg/fb.svg" alt="fb" />
            <img id="insta-icon" src="./public/assets/svg/insta.svg" alt="" />
            <img id="whatsapp" src="./public/assets/svg/whatsapp.svg" alt="" />
        </span>
        </div>
        </section>
        </div>
        </div>
    );
}

export default About;
