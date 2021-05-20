import React from 'react';
import { Link } from "react-router-dom";

export default function ComingSoon() {
    return (
        <div class="coming-soon">
            <div class="container p-4">
                <h1 class="lg">
                    COMING SOON!
                </h1>

                <h2 class="d-txt md">
                    In the meantime... 
                </h2>

                <button class="d-txt btn">
                    <Link to="/submit-event" class="d-txt">Submit Event</Link>
                </button>
                
            </div>
        </div>
    )
}