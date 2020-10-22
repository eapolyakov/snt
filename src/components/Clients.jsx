import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import ClientsItem from "./ClientsItem";

export default function Clients(){
    return <div className="w3-our-clients">
        <div className="container">
            <h3>Фотогалерея</h3>
            <OwlCarousel
                className="owl-theme"
                items="4"
                autoplay
                loop
            >
                <ClientsItem img="/images/foto_1.jpg"/>
                <ClientsItem img="/images/foto_2.jpg"/>
                <ClientsItem img="/images/foto_3.jpg"/>
                <ClientsItem img="/images/foto_4.jpg"/>
                <ClientsItem img="/images/foto_5.jpg"/>
            </OwlCarousel>
        </div>
    </div>

}