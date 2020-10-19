import React from "react";

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
                        <h1><a href="index.html">Estate Group</a></h1>
                    </div>
                </div>

                { /* Collect the nav links, forms, and other content for toggling*/}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="properties.html">Properties</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages <b
                                className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li><a href="typography.html">Short Codes</a></li>
                                <li><a href="icons.html">Icons Page</a></li>
                            </ul>
                        </li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>
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