import React from "react";
import AgentsItem from "./AgentsItem";

export default function Agents(){
    return <section className="team-w3ls">
        <div className="container">
            <div className="agileits-team text-center">
                <h3>MEET OUR AGENTS</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <AgentsItem
                img="/images/agent-1.jpg"
                alt="agent1"
                name="Alex"
                target="#agent1"
                />
                <AgentsItem
                    img="/images/agent-2.jpg"
                    alt="agent2"
                    name="Nick"
                    target="#agent2"
                />
                <AgentsItem
                    img="/images/agent-3.jpg"
                    alt="agent3"
                    name="Mike"
                    target="#agent3"
                />
                <AgentsItem
                    img="/images/agent-4.jpg"
                    alt="agent4"
                    name="Sick"
                    target="#agent4"
                />
                <div className="clearfix"></div>
            </div>
        </div>
    </section>
}