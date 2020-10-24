import React from "react";
import Comment from "./Comment";

export default function BlogSingleComments(){
    return <div className="single-middle">
        <h3>Комментарии</h3>
        <Comment
            link="#"
            img="/images/co.png"
            alt="avatar"
            author="Иван"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit."
        />
        <Comment
            link="#"
            img="/images/co.png"
            alt="avatar"
            author="Иван"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit."
        />
        <Comment
            link="#"
            img="/images/co.png"
            alt="avatar"
            author="Иван"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit."
        />
        <div className="clearfix"/>
    </div>
}