import React from "react";

export default function BlogItem(props){
    return <div className="w3layouts-blog-to">
        <a href={props.link}><img className="img-responsive sin-on" src={props.img} alt={props.alt}/></a>
        <div className="blog-top">
            <div className="blog-left">
                <b>{props.day}</b>
                <span>{props.month}</span>
            </div>
            <div className="top-blog">
                <a className="fast" href={props.link}>{props.title}</a>
                <p>Posted by <a href={props.authorlink}>{props.author}</a> in <a href="#">General</a> | <a href={props.commentslink}>{props.commentscount}</a></p>
                <p className="sed">{props.text}</p>
                <a href={props.link} className="more">Читать<span> </span></a>
            </div>
            <div className="clearfix"></div>
        </div>
    </div>
}
