import React from "react";

export default function AgentsItem(){
    return <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 w3-agent">
        <div className="hovereffect">
            <img className="img-responsive" src="/images/agent-1.jpg" alt="tgggt"/>
            <div className="overlay">
                <h4>Agent name</h4>
                <p>
                    <a href="#" data-toggle="modal" data-target="#agent1">Contact me</a>
                </p>
            </div>
        </div>
    </div>
}