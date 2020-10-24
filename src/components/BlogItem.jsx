import React from "react";
import {Link} from "react-router-dom";

export default function BlogItem(props){
    return <div className="w3layouts-blog-to">
        <Link to={props.link}><img className="img-responsive sin-on" src={props.img} alt={props.alt}/></Link>
        <div className="blog-top">
            <div className="blog-left">
                <b>{props.day}</b>
                <span>{props.month}</span>
            </div>
            <div className="top-blog">
                <Link className="fast" to={props.link}>{props.title}</Link>
                <p>Posted by <a href={props.authorlink}>{props.author}</a> in <a href="#">General</a> | <Link to={props.commentslink}>{props.commentscount}</Link></p>
                <p className="sed">{props.text}</p>
                <a href={props.link} className="more">Читать<span> </span></a>
            </div>
            <div className="clearfix"></div>
        </div>
    </div>
}
