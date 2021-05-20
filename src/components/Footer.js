import React from 'react';
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";

export default function Footer() {
    return (
        <div class="footer py-5">
            <div class="container grid grid-3">
                <div>
                    <h2 class="l-txt md">Blockchain Summer 2021</h2>
                    <p class="l-txt">Copyright &copy; 2021</p>

                    <a href="https://twitter.com/JiyounyK" class=""><i class="fab fa-twitter fa-2x "></i></a>
                </div>

                <div></div>

                <div class="actions">

                    <div>
                        <h2 class="l-txt sm">
                            Don't see your event?
                        </h2>
                        <button class="btn">
                            <Link to="/submit-event">Submit Event</Link>
                        </button>
                    </div>

                   <br/>

                    <Subscribe/>

                </div>
            </div>
        </div>
    )
}