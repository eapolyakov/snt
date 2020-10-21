import React from "react";
import AgentsItem from "./AgentsItem";

export default function Agents(){
    return <section className="team-w3ls">
        <div className="container">
            <div className="agileits-team text-center">
                <h3>Члены правления</h3>
                <p>Эти люди работают на благо посёлка</p>
                <AgentsItem
                img="/images/agent-1.jpg"
                alt="agent1"
                name="Алексей"
                role="Председатель"
                target="#agent1"
                />
                <AgentsItem
                    img="/images/agent-2.jpg"
                    alt="agent2"
                    name="Иван"
                    role="Бухгалтер"
                    target="#agent2"
                />
                <AgentsItem
                    img="/images/agent-3.jpg"
                    alt="agent3"
                    name="Михаил"
                    role="Заместитель"
                    target="#agent3"
                />
                <AgentsItem
                    img="/images/agent-4.jpg"
                    alt="agent4"
                    name="Вася"
                    role="Сторож"
                    target="#agent4"
                />
                <div className="clearfix"></div>
            </div>
        </div>
    </section>
}