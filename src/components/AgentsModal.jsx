import React from "react";
import AgentsModalItem from "./AgentsModalItem";

export default function AgentsModal(){
    return <div>
        <AgentsModalItem
            id="agent1"
            img="/images/agent-1.jpg"
            alt="agent1"
            name="Алексей"
            role="Председатель"
            phone="123456"
            address="1я садовая д.3"
            email="fgg@fdf.rtr"
        />
        <AgentsModalItem
            id="agent2"
            img="/images/agent-2.jpg"
            alt="agent2"
            name="Иван"
            phone="123456"
            address="sfvfvgdg"
            email="fgg@fdf.rtr"
        />
        <AgentsModalItem
            id="agent3"
            img="/images/agent-3.jpg"
            alt="agent3"
            name="Михаил"
            phone="#123457"
            address="sfvfvgdg"
            email="fgg@fdf.rtr"
        />
        <AgentsModalItem
            id="agent4"
            img="/images/agent-4.jpg"
            alt="agent4"
            name="Alex"
            phone="#agent1"
            address="sfvfvgdg"
            email="fgg@fdf.rtr"
        />
    </div>
}