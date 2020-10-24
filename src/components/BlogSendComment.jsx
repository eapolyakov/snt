import React from "react";

export default function BlogSendComment(){
    return <div className="single-bottom">
        <h3>Оставить комментарий</h3>
        <form action="#" method="post">
            <div className="col-md-4 comment">
                <input type="text" placeholder="Name" name="name" required=""/>
            </div>
            <div className="col-md-4 comment">
                <input type="text" placeholder="Email" name="email" required=""/>
            </div>
            <div className="col-md-4 comment">
                <input type="text" placeholder="Subject" name="sub"/>
            </div>
            <div className="clearfix"/>
            <textarea placeholder="Message" name="Message" required/>
            <input type="submit" value="Отправить"/>
        </form>
    </div>
}