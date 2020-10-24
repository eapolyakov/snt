import React from "react";

export default function Comment(props){
    return  <div className="media">
        <div className="media-left">
            <a href={props.link}>
                <img className="media-object" src={props.img} alt={props.alt}/>
            </a>
        </div>
        <div className="media-body">
            <h4 className="media-heading"><a href={props.link}>{props.author}</a></h4>
            <p>{props.text}</p>
        </div>
    </div>
}