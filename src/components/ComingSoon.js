import React from 'react';
import { Link } from "react-router-dom";

export default function ComingSoon({
    collection
}) {
    return (
        <div className="coming-soon">
            <div className="container p-5">

                <h2 className="lg my-1"> 
                    <span className="uppercase bold"> {collection} </span> - Coming Soon!
                </h2>

                <h2 className="d-txt md">
                    In the meantime... 
                </h2>

                <button className="d-txt submit-btn">
                    <Link to="/submit-event" className="d-txt">Submit Event</Link>
                </button>
                
            </div>
        </div>
    )
}