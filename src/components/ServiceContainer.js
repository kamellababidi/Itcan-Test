import React from 'react';

const ServiceContainer = (props) => (
    <div className='service-container'>
        <img className='service-img' src={props.img}/>
        <h5>{props.title}</h5>
        <p>{props.desc}</p>
    </div>
);

export default ServiceContainer;
