import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import "./Navbar.css";

function Navbar() {

    return (
        <nav className="navbar">
            <div className="leftSide">
                <div className="link">
                    <Link to="/">
                    <span className="logo-container">
                        <img src={Logo} alt="logo"/>
                    </span>
                    </Link>
                </div>
                <div className="rightSide">
                    <Link to="/"> Swim </Link>
                    <Link to="/surf"> Surf </Link>
                    <Link to="/windsurfing"> Windsurfing </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
