import React from "react";

export default function Newsletter(){
    return <div className="subscribe text-center">
        <div className="container">
            <h3>Get our free newsletter</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s. Contrary to popular belief, Lorem Ipsum is not
                simply random text. It has roots in a piece of classical Latin literature.</p>
            <form>
                <input type="email" name="email" placeholder="Email Address" className="user" required=""/>
                <input type="submit" value="Subscribe" />
            </form>
            <p className="spam">We never share your information or use it to spam you</p>
        </div>
    </div>
}