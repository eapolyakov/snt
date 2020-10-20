import React from "react";

export default function BlogCategory(props){
    return  <li>
        <a href={props.link}>
            <i className="fa fa-long-arrow-right"/>
            {props.categoryname}
        </a>
    </li>
}