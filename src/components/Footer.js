import React from 'react';
import { Link } from "react-router-dom";
import logoWhite from "../assets/logo-white.svg";

export default function Footer() {
    return (
        <div className="footer">
            <div className="container footer-grid">
                <div className="info">
                    <div>    
                        <img className="logo" src={logoWhite} alt="logo"/>
                        <p className="copyright">Copyright &copy; 2021</p>
                    </div>
                </div>

                <div className="actions flex ">
                    <a href="https://twitter.com/JiyounyK" className="icon">
                        <i className="fab fa-twitter fa-1x "></i>
                    </a>
                    <button className="submit-btn btn">
                        <Link to="/submit-event">Submit Event</Link>
                    </button>
                    <button className="subscribe-btn btn">
                        <Link to="/subscribe">Subscribe to Newsletter</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}