import React from "react";
import {NavLink} from "react-router-dom";

export default function Header() {
    return <div className="container">
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Скрыть</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="logo">
                        <h1>
                            <NavLink to="/">СНТ Металлист</NavLink>
                        </h1>
                    </div>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink to="/">Главная</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">О нас</NavLink>
                        </li>
                        <li>
                            <NavLink to="/property">Собственность</NavLink>
                        </li>
                        <li className="dropdown">
                            <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown">Документы<b className="caret"></b></NavLink>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink to="typography.html">Законодательство</NavLink>
                                </li>
                                <li>
                                    <NavLink to="icons.html">Решения правления</NavLink>
                                </li>
                                <li>
                                    <NavLink to="icons.html">Отчёты</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/blog">Блог</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts">Контакты</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <script src="js/nav.js"></script>
    </div>
}