import React from "react";
import aboutimage from "../images/about.jpg"

const about = function(){
    return(
        <>
        <h1 className="title">About Us</h1>
        <figure className="imgcontainer">
            <img src={aboutimage}/>
        </figure>
        </>
    )
}

export default about