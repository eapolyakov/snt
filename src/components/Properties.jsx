import React from "react";
import PropertiesItem from "./PropertiesItem";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


export default function Properties(){
    return <OwlCarousel
        className="owl-theme"
        items="1"
        autoplay
        loop
    >
                    <PropertiesItem />
                    <PropertiesItem />
                    <PropertiesItem />
                    <PropertiesItem />
    </OwlCarousel>
}