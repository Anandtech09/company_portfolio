import React, { useEffect, useState, useRef } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import './Project.css';

const Project = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const timeoutRef = useRef(null);
    const totalImages = images.length;

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        Aos.init({ duration: 1000 });
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                return (prevIndex % (totalImages + 1)) + 1;
            });
        }, interval);

        return () => {
            resetTimeout();
        };
    }, [currentIndex, interval, totalImages]);

    const handleDotClick = (index) => {
        setCurrentIndex(index + 1);
    };

    const imagesWithClones = [
        images[totalImages - 1],
        ...images,
        images[0]
    ];

    return (
        <div id="projects" data-aos="fade-up">
            <div className="carousel-container">
                <div
                    className="carousel-wrapper"
                    style={{ transform: `translateX(-${(currentIndex * 100) / imagesWithClones.length}%)` }}
                >
                    {imagesWithClones.map((image, index) => (
                        <div className="carousel-item" key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="nav-dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={index === (currentIndex - 1) % totalImages ? "active" : ""}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
