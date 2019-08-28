import React from 'react';

const ValueContainer = (props) => (
    <div className='value-container'>
        <img className='value-img' src={props.img}/>
        <h5>{props.title}</h5>
        <p>{props.desc}</p>
    </div>
);

export default ValueContainer;
