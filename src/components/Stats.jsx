import React from "react";

export default function Stats(){
    return <div className="stats">
        <div className="container">
            <h3>Overview</h3>
            <div className="stats-info">
                <div className="col-md-4 col-sm-4 stats-grid slideanim">
                    <i className="fa fa-smile-o"></i>
                    <div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='15500'
                         data-delay='.5' data-increment="50">15500
                    </div>
                    <p className="stats-info">Happy Clients</p>
                </div>
                <div className="col-md-4 col-sm-4 stats-grid slideanim">
                    <i className="fa fa-tags" aria-hidden="true"></i>
                    <div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='18'
                         data-delay='.5' data-increment="5">18
                    </div>
                    <p className="stats-info">Sales per month</p>
                </div>
                <div className="col-md-4 col-sm-4 stats-grid slideanim">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='21500'
                         data-delay='.5' data-increment="20">21500
                    </div>
                    <p className="stats-info">Number of Homes</p>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    </div>
}