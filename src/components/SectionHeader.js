import React from 'react';

const SectionHeader = (props) => (
    <div className='section-header-container'>
        <h4>{props.title}</h4>
        <div className='section-header-underline'></div>
    </div>
);

export default SectionHeader;
