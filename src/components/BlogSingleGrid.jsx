import React from "react";
import Grid from "./Grid";

export default function BlogSingleGrid(){
    return  <div className="col-md-6 md-in">
        <ul className="grid-part">
            <Grid
            link="#"
            text="Lorem ipsum dolor sit
                amet"
            />
            <Grid
                link="#"
                text="Lorem ipsum dolor sit
                amet"
            />
            <Grid
                link="#"
                text="Lorem ipsum dolor sit
                amet"
            />
            <Grid
                link="#"
                text="Lorem ipsum dolor sit
                amet"
            />
        </ul>
    </div>
}