import React from 'react';
import { Link } from "react-router-dom";


export default function Navigation() {
    return (
        <div class="navbar">
            <div class="container flex"> 
                <h1 class="logo">
                    <Link to="/">Blockchain Summer 2021</Link>
                </h1>
                <nav>
                    <ul>
                    <li><Link to="/miami">Miami</Link></li>
                    <li><Link to="/paris">Paris</Link></li>
                    <li><Link to="/berlin">Berlin</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
