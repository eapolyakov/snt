import React from "react";

export default function PropertyItem(props){
    return <div className="col-md-4 col-ms-6 jm-item first filtr-item" data-category={props.category}
                data-sort={props.datasort}
                style={{opacity: "1", transform: "scale(1) translate3d(0px, 0px, 0px)", backfaceVisibility: "hidden", perspective: "1000px", transformStyle: "preserve-3d", position: "absolute", transition: "all 0.5s ease-out 0ms"}}>
        <div className="jm-item-wrapper">
            <div className="jm-item-image">
                <img src={props.img} alt={props.alt}/>
                <span className="jm-item-overlay"> </span>
                <div className="jm-item-button"><a href="property-details.html">Просмотр</a></div>
            </div>
            <div className="jm-item-title">{props.price}</div>
            <a className="agile-its-property-title" href="property-details.html">{props.name}</a>
            <p className="w3ls-p-text">{props.description}</p>
        </div>
    </div>
}