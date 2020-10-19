import React from "react";

export default function Slider(){
    return <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/*Indicators*/}
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className=""></li>
            <li data-target="#myCarousel" data-slide-to="1" className=""></li>
            <li data-target="#myCarousel" data-slide-to="2" className="active"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
            <div className="item active">
                <div className="container">
                    <div className="carousel-caption">
                        <h3>Creative Design</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC.</p>

                    </div>
                </div>
            </div>
            <div className="item item2">
                <div className="container">
                    <div className="carousel-caption">
                        <h3>Perfect Nature</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text
                            ever since the 1500s.</p>

                    </div>
                </div>
            </div>
            <div className="item item3">
                <div className="container">
                    <div className="carousel-caption">
                        <h3>Smart Planning</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout.</p>

                    </div>
                </div>
            </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
}