import React from 'react';

const Footer = (props) => (
    <div className='footer-container'>
        <img className='colored-logo' src={require('../public/colored-logo.png')}/>
        <div className='footer-social-container'>
            <img className='social-img' src={require('../public/facebook.svg')}/>
            <img className='social-img' src={require('../public/twitter.svg')}/>
            <img className='social-img' src={require('../public/linkedin.svg')}/>
            <img className='social-img' src={require('../public/instgram.svg')}/>
        </div> 
        <p className='footer-text'>© From ITCAN with ❤️</p>
        <img className='google-img' src={require('../public/google.png')}/>
    </div>
);

export default Footer;
