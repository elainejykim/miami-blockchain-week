import React from 'react';
import '../css/Landing.css'; 
import illustration from '../assets/illustration.svg';
import miami from '../assets/miami.jpg';
import paris from '../assets/paris.jpg';
import berlin from '../assets/berlin.jpg';
import { Link } from "react-router-dom";

const City = ({city, src}) => {
    let link = "/" + city.toLowerCase();
    return (
        <Link to={link}><div className="city-card">
            <img className="img" alt={city} src={src}/>
            <h3 className="city-name">{city}</h3>
        </div></Link>
    );
}

export default function Landing() {
    
    return(
        <div className="landing">
            <div className="landing-header">
                <div className="container">
                    <div className="text">
                        <h1 className="title">Your Summer of Blockchain Events</h1>
                        <button className="g-btn"><a href="#browse-events">Browse Events</a></button>
                    </div>
                    <img id="illustration" alt="illustration" src={illustration}/>
                </div>
            </div>
            <div className="browse-events container" id="browse-events">
                <h2 className="section-title">Browse Events by Cities</h2>
                <div className="cities">
                    <City city="Miami" src={miami}/>
                    <City city="Paris" src={paris}/>
                    <City city="Berlin" src={berlin}/>
                </div>
            </div>
        </div>
    );
}
