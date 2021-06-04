import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

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
        console.log("wide")
        return (
            <div className="navbar">
                <div className="container flex"> 
                    <h1 className="logo">
                        <Link to="/">Blockchain Summer</Link>
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
        );
    } else {
        console.log("Small")
        return (
            <div className="navbar">
                <div className="container flex">
                    <h1 className="logo">
                        <Link to="/">Blockchain Summer</Link>
                    </h1>

                    {   opened ?
                        <CloseIcon onClick={() => setOpened(!opened)} style={{ color: "white" }}/>
                        :
                        <MenuIcon onClick={() => setOpened(!opened)} style={{ color: "white" }}/>
                    }
                </div>

                { opened && 
                        <nav className="container">
                            <ul>
                                <li><Link to="/miami">Miami</Link></li>
                                <li><Link to="/paris">Paris</Link></li>
                                <li><Link to="/berlin">Berlin</Link></li>
                            </ul>
                        </nav> 
                    }
            </div>
        );
    }
}
