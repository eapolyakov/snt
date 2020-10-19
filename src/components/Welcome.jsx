import React from "react";

export default function Welcome(){
    return <div className="welcome-top">
        <div className="container">
            <div className="col-md-6 welcome_top_left">
                <h3>WELCOME</h3>
                <h5>TO OUR ESTATE GROUP</h5>
                <p>Lorem Ipsum is simply dummy printing industry. It has survived not. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.</p>
            </div>
            <div className="col-md-6 welcome_top_right">
                <h3>WE'RE OPEN</h3>
                <h5>In Sed Ut perspiciatis Street</h5>
                <div className="welcome_right_location">
                    <div className="location_img">
                        <img src="images/loc.jpg" alt=""/>
                    </div>
                    <div className="location">
                        <p>Lorem Ipsum has been the industry's since the 1500s. It has survived centuries.</p>
                        <p className="location_text"><span className="glyphicon glyphicon-map-marker"></span>795 Folsom
                            Ave, Suite 600,San Francisco, CA 94107</p>
                        <p className="location_text"><span className="glyphicon glyphicon-dashboard"></span>Mon to Sat
                            8:30am - 4:30pm, Sunday - Holiday</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    </div>
}