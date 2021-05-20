import React from 'react';
import { Link, withRouter } from "react-router-dom";


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

{/* <div class="navbar">
<div class="container flex"> 
    <h1 class="logo">Blockchain Summer 2021</h1>
    <nav>
        <ul>
        <li><a href="/miami">Miami</a></li>
        <li><a href="/paris">Paris</a></li>
        <li><a href="/berlin">Berlin</a></li>
        </ul>
    </nav>
</div>
</div> */}