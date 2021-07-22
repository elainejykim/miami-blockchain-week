import React from 'react';
import { Link } from "react-router-dom";
import logoWhite from "../assets/logo-white.svg";
import '../css/Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container footer-grid">
                <div className="info">
                        <img className="logo" src={logoWhite} alt="logo"/>
                        <p className="copyright">Copyright &copy; 2021</p>
                </div>

                <div className="actions flex ">
                    <button className="submit-btn">
                        <Link to="/submit-event">Submit Event</Link>
                    </button>
                    <button className="subscribe-btn">
                        <Link to="/subscribe">Subscribe to Newsletter</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}