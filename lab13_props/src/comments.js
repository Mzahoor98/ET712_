import React from "react";
import './index'


const User = function(props){
    return(
        <>
             <section className="card">
                <a>  <img src={props.image}/> </a>
                <div className="content">
                    <a className="author">{props.name}</a>
                </div>
                <div className="metadata">
                    <p>Posted on <span className="date">{props.date}</span></p>
                </div>
                <div className="comment">
                    <p>{props.msg}</p>
                </div>
             </section>
        
        </>
    )
}

export default User;