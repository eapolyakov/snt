import React from "react";

export default function AgentsModalItem(props){
    return <div className="modal fade modal-about" id={props.id} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Обо мне</h4>
                </div>
                <div className="modal-body modal-spa">
                    <div className="w3layouts-about">
                        <div className="col-md-4 about-left ">
                            <img src={props.img} className="img-responsive" alt={props.alt}/>
                        </div>
                        <div className="col-md-8 about-right wthree">
                            <h3>Меня зовут <span>{props.name}!</span></h3>
                            <h4>{props.h4}</h4>
                            <ul className="address">
                                <li>
                                    <ul className="text">
                                        <li><b>Должность </b></li>
                                        <li>{props.role}</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="agileits-address-text">
                                        <li><b>Телефон </b></li>
                                        <li>{props.phone}</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="agileits-address-text">
                                        <li><b>Адрес </b></li>
                                        <li>{props.address}</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="agileits-address-text">
                                        <li><b>Email </b></li>
                                        <li><a href={`mailto:${props.email}`}>{props.email}</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}