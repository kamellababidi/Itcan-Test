import React from 'react';

const ClientContainer = (props) => (
    <div className='client-container'>
        <img className='client-img' src={props.img}/>
    </div>
);

export default ClientContainer;
