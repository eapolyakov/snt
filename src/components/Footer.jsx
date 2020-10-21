import React from "react";
import {NavLink} from "react-router-dom";

export default function Footer(){
    return <div>
        <div className="footer-top">
            <div className="container">
                <div className="col-md-6 footer-top-left">
                    <h3><NavLink to="index.html">СНТ Металлист</NavLink></h3>
                    <p>Заходите на наши страницы в социальных сетях</p>
                    <ul className="fb_icons2">
                        <li><a className="fb" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a className="twit" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a className="goog" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                        </li>
                        <li><a className="pin" href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
                        </li>
                        <li><a className="drib" href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div className="col-md-3 footer-top-mid">
                    <h3>Меню</h3>
                    <ul>
                        <li><NavLink to="/"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Главная</NavLink>
                        </li>
                        <li><NavLink to="/about"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>О нас</NavLink>
                        </li>
                        <li><NavLink to="/properties"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Собственность</NavLink>
                        </li>
                        <li><NavLink to="/blog"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Блог</NavLink>
                        </li>
                        <li><NavLink to="/contacts"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Контакты</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 adress-agile">
                    <h3>Адрес</h3>
                    <address>
                        <ul>
                            <li>садовое некоммерческое товарищество Металлист</li>
                            <li>140155 Раменский городской округ</li>
                            <li>Московская область, Россия</li>
                            <li>Телефон : +1 (548) 123-456 7</li>
                            <li>Email : <a className="mail" href="mailto:mail@example.com">info(at)estategroup.com</a>
                            </li>
                        </ul>
                    </address>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
        <div className="w3layouts-copyright">
            <p className="footer">&copy; 2020 All Rights Reserved | Design by
                <NavLink to="http://webocrat.ru"> Evgeniy Polyakov</NavLink></p>
        </div>
    </div>
}