import React from "react";
import { Link } from "react-router-dom";

const NavBars = function(){
    return(
        <>
            <nav className="navbar">
                <div>
                    <link>QCC</link>
                </div>
                <div className="btngroup">
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/about">About Us</Link></button>
                    <button><Link to="/contact">Contact Us</Link></button>
                </div>
            </nav>
        </>
    )
}

export default NavBars