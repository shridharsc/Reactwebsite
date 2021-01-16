import React,{useState , useEffect}from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click , setClick] = useState(false);
    const [button, setButton] = useState(true)

    const callclick = () => setClick(!click);

    const closemodelmenu = () => setClick(false)

    const showButton = () =>{
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }   
    }

    useEffect(() => {
        showButton()
    },[])

    window.addEventListener("resize",showButton)

    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closemodelmenu}>
                    TRVL <i className="fa fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={callclick}>
                    <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closemodelmenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closemodelmenu}>
                            services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closemodelmenu}>
                            products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closemodelmenu}>
                            sign-up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle="btn-outline">Sign-up</Button>}
            </div>
        </div>
    );
}

export default Navbar