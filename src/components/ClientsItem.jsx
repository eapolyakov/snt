import React from "react";

export default function ClientsItem(props){
    return <div className="item">
        <a href="#" className="client-logo">
            <img src={props.img} className="img-responsive" alt="partner"/>
        </a>
    </div>

}