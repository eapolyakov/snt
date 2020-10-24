import React from "react";

export default function BlogTopic(props){
    return <div className="blog-to1 service_info">
        <img className="img-responsive sin-on" src={props.img} alt={props.alt}/>
        <div className="blog-top">
            <div className="blog-left">
                <b>{props.date}</b>
            </div>
            <div className="top-blog">
                <a className="fast" href={props.link}>{props.title}</a>
                <p>Posted by <a href="#">Admin</a> in <a href="#">General</a> | <a href="#">10
                    Comments</a></p>
                <p className="sed">{props.topic}</p>
                <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
        </div>
    </div>
}