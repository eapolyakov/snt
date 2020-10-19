import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import ClientsItem from "./ClientsItem";

export default function Clients(){
    return  <div className="w3-our-clients">
        <div className="container">
            <h3>Our clients</h3>
            <OwlCarousel
                className="owl-theme"
                items="4"
                autoplay
                loop
            >
                <ClientsItem/>
                <ClientsItem/>
                <ClientsItem/>
                <ClientsItem/>
                <ClientsItem/>
            </OwlCarousel>
        </div>
    </div>

}