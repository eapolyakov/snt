import React from 'react';


export default function Input(props) {
    return (<div className="form-group">
            <htmlFor for={props.name} className="form-label">
                <p className="your-para">{props.title}</p>
            </htmlFor>
            <input
                className="form-control"
                id={props.id}
                name={props.name}
                type={props.inputType}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                {...props} />
        </div>
    )
}