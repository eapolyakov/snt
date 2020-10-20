import React from "react";

export default function BlogArchive(props){
    return <li>
        <a href="#">
            <i className="fa fa-long-arrow-right"></i>
            <span>{props.year} </span>
            <span>{props.month} </span>
            <span>({props.commentscount})</span>
        </a>
    </li>
}