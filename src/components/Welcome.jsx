import React from "react";
import {Link} from "react-router-dom";

export default function Welcome(){
    return <div className="welcome-top">
        <div className="container">
            <div className="col-md-6 welcome_top_left">
                <span className=""><h3>Бывшая "Снежинка"</h3>
                <h5>Факел Химик Вишенка</h5></span>
                <p className="text-justify">До 2012 года наш дачный посёлок был известен как Снежинка, а сейчас представляет собой несколько независимых садовых некомерческих товареществ</p>
            </div>
            <div className="col-md-6 welcome_top_right">
                <span className=""><h3>СНТ Металлист</h3>
                    <h5>Добро пожаловать</h5></span>
                <div className="welcome_right_location">
                    <div className="location_img">
                        <Link to="/contacts"><img src="images/onmap.webp" alt="onmap"/></Link>
                    </div>
                    <div className="location text-justify">
                        <p>Мы расположены в 64 км от центра Москвы по казанскому Ж/Д направлению, недалеко от станции "Кузяево"</p>
                        <p className="location_text"><Link to="/contacts">140155, садовое некоммерческое товарищество Металлист, Раменский городской округ, Московская область, Россия</Link></p>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    </div>
}