import React from "react";

export default function AgentsItem(props){
    return <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 w3-agent">
        <div className="hovereffect">
            <img className="img-responsive" src={props.img} alt={props.alt}/>
            <div className="overlay">
                <h4>{props.name}<br/><br/>{props.role}</h4>
                <p>
                    <a href="#" data-toggle="modal" data-target={props.target}>Контакты</a>
                </p>
            </div>
        </div>
    </div>
}