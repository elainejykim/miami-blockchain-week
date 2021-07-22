import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../assets/logo.svg';
import '../css/Navbar.css';

export default function Navigation() {

    const [ width, setWidth ] = useState(window.innerWidth);
    const [ opened, setOpened ] = useState(false);
   
    useEffect(() => {

        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return _ => {window.removeEventListener('resize', handleResize)}
    })

    if (width > 768) {
        return (
            <div className="navbar">
                <div className="container flex"> 
                    <div className="logo">
                        <Link to="/"><img alt="logo" src={logo}/></Link>
                    </div>
                    <nav>
                        <ul>
                        <li><Link to="/miami">Miami</Link></li>
                        <li><Link to="/paris">Paris</Link></li>
                        <li><Link to="/berlin">Berlin</Link></li>
                        </ul>
                    </nav>
                    <button className="submit-btn">
                        <Link to="/submit-event">Submit Event</Link>
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="navbar">
                <div className="container flex">
                    <div className="logo">
                        <Link to="/"><img alt="logo" src={logo}/></Link>
                    </div>

                    {   opened ?
                        <CloseIcon onClick={() => setOpened(!opened)} style={{ color: "white" }}/>
                        :
                        <MenuIcon onClick={() => setOpened(!opened)} style={{ color: "white" }}/>
                    }
                </div>

                { opened && 
                        <nav className="container">
                            <ul>
                                <li><Link onClick={() => setOpened(!opened)} to="/miami">Miami</Link></li>
                                <li><Link onClick={() => setOpened(!opened)} to="/paris">Paris</Link></li>
                                <li><Link onClick={() => setOpened(!opened)} to="/berlin">Berlin</Link></li>
                            </ul>
                        </nav> 
                    }
            </div>
        );
    }
}
