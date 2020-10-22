import React from "react";

export default function Stats(){
    return <div className="stats">
        <div className="container">
            <h3>СНТ Металлист это</h3>
            <div className="stats-info">
                <div className="col-md-4 col-sm-4 stats-grid slideanim">
                    <i className="fa fa-smile-o"></i>
                    <div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='1546'
                         data-delay='.5' data-increment="10">1546
                    </div>
                    <p className="stats-info">Участков</p>
                </div>
                <div className="col-md-4 col-sm-4 stats-grid slideanim">
                    <i className="fa fa-tags" aria-hidden="true"></i>
                    <div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='12'
                         data-delay='.5' data-increment="1">12
                    </div>
                    <p className="stats-info">Месяцев в году</p>
                </div>
                <div className="col-md-4 col-sm-4 stats-grid slideanim">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='3210'
                         data-delay='.5' data-increment="20">3210
                    </div>
                    <p className="stats-info">Дачников</p>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    </div>
}