import React from 'react';
import { Link } from "react-router-dom";

export default function ComingSoon() {
    return (
        <div className="coming-soon">
            <div className="container p-4">
                <h1 className="lg">
                    COMING SOON!
                </h1>

                <h2 className="d-txt md">
                    In the meantime... 
                </h2>

                <button className="d-txt btn">
                    <Link to="/submit-event" className="d-txt">Submit Event</Link>
                </button>
                
            </div>
        </div>
    )
}