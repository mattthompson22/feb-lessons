import React from "react";
import {Link} from "react-router-dom";
function Header(props) {
    return (
        <header>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/todos">Todos</Link>
            </nav>
        </header>
    )
}

export default Header;