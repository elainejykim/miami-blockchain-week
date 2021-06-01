import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer py-5">
            <div className="container grid grid-3">
                <div className="info">
                    <div>    
                        <h2 className="l-txt md">Blockchain Summer 2021</h2>
                        <p className="l-txt">Copyright &copy; 2021</p>
                    </div>

                    <a href="https://twitter.com/JiyounyK" className="icon"><i className="fab fa-twitter fa-2x "></i></a>
                </div>

                <div></div>

                <div className="actions">

                    <div>
                        <h2 className="l-txt sm">
                            Don't see your event?
                        </h2>
                        <button className="btn">
                            <Link to="/submit-event">Submit Event</Link>
                        </button>
                    </div>

                   <br/>

                    <div>
                        <h2 className="l-txt sm">
                            Want to stay up to date?
                        </h2>
                        <button className="btn">
                            <Link to="/subscribe">Subscribe</Link>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}