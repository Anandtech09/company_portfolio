import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import './Service.css';

const serviceItems = [
    { img: './src/assets/images/file2.png', text: "Assistance to software projects." },
    { img: './src/assets/images/file3.png', text: "Assistance for AI works." },
    { img: './src/assets/images/file4.png', text: "We build future." },
    { img: 'https://cdn.pixabay.com/photo/2023/03/05/21/11/ai-generated-7832244_640.jpg', text: "We are eager to develop hardware projects." },
    { img: 'https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=', text: "We help students to do their project" },
    { img: 'https://nichedatafactory.com/wp-content/uploads/2021/06/mobile-apps.jpg', text: "We Build Mobile Apps for you...." }
];

const Service = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div id="services">
            <div className="service-container">
                <div className="service-heading" data-aos="fade-up">
                    <h1>Our Services</h1>
                </div>
                <div className="service-text">
                    {serviceItems.map((item, index) => (
                        <div key={index} className="grid-item" data-aos="flip-left">
                            <img src={item.img} alt={item.text} className="service-img" />
                            <div className="overlay">
                                <div className="text">{item.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
        </div>   
    );
}

export default Service;
