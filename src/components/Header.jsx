import React from "react";
import {NavLink} from "react-router-dom";

export default function Header() {
    return <div className="container">
        {/* nav*/}
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                { /* Brand and toggle get grouped for better mobile display*/}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="logo">
                        <h1>
                            <NavLink to="/">Estate Group</NavLink>
                        </h1>
                    </div>
                </div>

                { /* Collect the nav links, forms, and other content for toggling*/}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink to="/">Главная</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">О нас</NavLink>
                        </li>
                        <li>
                            <NavLink to="/properties">Собственность</NavLink>
                        </li>
                        <li className="dropdown">
                            <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown">Страницы<b className="caret"></b></NavLink>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink to="typography.html">Short Codes</NavLink>
                                </li>
                                <li>
                                    <NavLink to="icons.html">Icons Page</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/blog">Блог</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Контакты</NavLink>
                        </li>
                    </ul>
                </div>
                { /* /.navbar-collapse*/}
            </div>
            { /* /.container-fluid*/}
        </nav>
        <script src="js/nav.js"></script>
        {  /* nav-js*/}
        { /* //nav*/}
    </div>
}