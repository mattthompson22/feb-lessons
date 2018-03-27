import React from "react";
import fuzzball from "../../images/cat-pic.jpeg";
console.log(fuzzball);

function Header() {
    return (
        <header className="header-wrapper">
            <h1 className="header-title">Welcome to My Page!</h1>
            <img src={fuzzball} alt="" />
        </header>
    )
}

export default Header;