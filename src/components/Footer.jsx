import React from "react";

export default function Footer(){
    return <div>
        <div className="footer-top">
            <div className="container">
                <div className="col-md-6 footer-top-left">
                    <h3><a href="index.html">ESTATE GROUP</a></h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled.</p>
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
                    <h3>Our Company</h3>
                    <ul>
                        <li><a href="index.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Home</a>
                        </li>
                        <li><a href="about.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>About</a>
                        </li>
                        <li><a href="properties.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Properties</a>
                        </li>
                        <li><a href="blog.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Blog</a>
                        </li>
                        <li><a href="contact.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 adress-agile">
                    <h3>Address</h3>
                    <address>
                        <ul>
                            <li>Parma Via Modena</li>
                            <li>40019 Sant'Agata Bolognese</li>
                            <li>BO, Italy</li>
                            <li>Telephone : +1 (548) 123-456 7</li>
                            <li>Email : <a className="mail" href="mailto:mail@example.com">info(at)estategroup.com</a>
                            </li>
                        </ul>
                    </address>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
        <div className="w3layouts-copyright">
            <p className="footer">&copy; 2016 Estate Group. All Rights Reserved | Design by
                <a href="http://w3layouts.com/"> W3layouts</a></p>
        </div>
    </div>
}