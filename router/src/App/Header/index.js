import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header>
            <h1>Welcome to Whatever.com!</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header;