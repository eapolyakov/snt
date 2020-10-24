import React from "react";

export default function Grid(props){
    return <li>
        <a href={props.link}>
            <i className="fa fa-long-arrow-right"/>
            {props.text}
        </a>
    </li>
}
