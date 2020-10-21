import React from "react";
import FeedbackForm from "./FeedbackForm";
import {Map, YMaps, Placemark, ZoomControl} from 'react-yandex-maps';

const mapState = {
    center: [55.601762, 38.534680],
    zoom: 13
};

export default function Contacts(){
    return <div className="w3layouts-contact-section">
        <div className="container">
            <div className="agileits-contact-main">
                <div className="col-md-6 w3ls-map">
                    <p className="loc">Наше расположение</p>
                    <YMaps>
                        <Map state={mapState} width='100%' height='300px'>
                            <Placemark
                                modules={["geoObject.addon.balloon"]}
                                geometry={[55.601762, 38.534680]}
                                properties={{
                                    balloonContentHeader: "СНТ Металлист",
                                }}
                            />
                            <ZoomControl
                                defaultOptions
                            />
                        </Map>
                    </YMaps>
                </div>
                <div className="col-md-6 wthree-contact-in">
                    <p className="sed-para">Контактная информация</p>
                    <p className="para1">Добраться до СНТ Металлист можно на электричке казанского направления, доехав до станции Кузяево.
                    Или на автомобиле по Егорьевскому шоссе, после деревни "Новохвритоново" повернув налево по указателю "КУЗЯЕВО".</p>
                    <div className="w3-address">
                        <address>
                            <strong>Адрес<br/></strong>
                            садовое некоммерческое товарищество Металлист<br/>
                            140155 Раменский городской округ<br/>
                            Московская область, Россия<br/>
                            <p title="Phone"><strong>Телефон:</strong></p> <span>+040 123 456 789, +015 89 58 520 520</span><br/>
                        </address>
                        <address>
                            <strong>Email</strong><br/>
                        <a className="mail" href="mailto:mail@example.com">info(at)estategroup.com</a>
                        </address>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="agileinfo-contact-bottom">
                <h3 className="text-center find">Оставьте Ваше сообщение</h3>
                <p className="contactpara1 text-center">Есть вопросы, предложения отзывы или жалобы?</p>
                <FeedbackForm/>
            </div>
        </div>
    </div>
}