import React from "react";
import PropertyItem from "./PropertyItem";

export default function Property(){
    return <div className="main-content">
        <div className="gallery" id="gallery">
            <div className="container">
                <div className="gallery_gds">
                    <ul className="simplefilter ">
                        <li className="active" data-filter="all">All</li>
                        <li data-filter="1">Commercial</li>
                        <li data-filter="2">Residential</li>
                        <li data-filter="3">Luxury</li>
                    </ul>
                    <div className="filtr-container" style={{padding: "0px", position: "relative", height: "858px"}}>
                        <div className="row">
                            <div>
                                <PropertyItem
                                    datasort="Dreamhouse"
                                    category="1, 5"
                                    img="images/g1.jpg"
                                    alt="property1"
                                    price="550$"
                                    name="Villa De La Sera"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry"
                                />
                            </div>

                            <div>
                                <PropertyItem
                                    datasort="Dreamhouse"
                                    category="2, 4"
                                    img="images/g1.jpg"
                                    alt="property1"
                                    price="550$"
                                    name="Villa De La Sera"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry"
                                />
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}