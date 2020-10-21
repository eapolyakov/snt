import React from 'react';


export default function TextArea(props) {
    return <div className="form-group">
        <htmlFor className="form-label">
            <p className="your-para">{props.title}</p>
        </htmlFor>
        <textarea
            className="form-control"
            name={props.name}
            rows={props.rows}
            cols={props.cols}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}/>
    </div>
};