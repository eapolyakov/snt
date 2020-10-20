import React from "react";

export default function BlogTop(props){
    return <div className="blog-list-top">
        <div className="blog-img">
            <a href={props.link}><img className="img-responsive" src={props.img} alt={props.alt}/></a>
        </div>
        <div className="blog-text">
            <p><a href={props.link}>{props.description}</a></p>
            <span className="link">{props.date}, {props.year}</span>
        </div>
        <div className="clearfix"></div>
    </div>
}