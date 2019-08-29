import React from 'react';

const IndustryContainer = (props) => (
    <div className='industry-container'>
        <img className='industry-img' src={props.img}/>
        <p>{props.title}</p>
    </div>
);

export default IndustryContainer;
