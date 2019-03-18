import React from 'react';
import './Footer.css';
import Contact from "../Contact/Contact";

const Footer = () => {
    return(
        <div className={'footer-component'}>
            <div className={'footer-component--content'}>
                <div className={'footer-component--content__left'}>
                    <h1>Gonzalo<span>.</span></h1>
                    <p>© 2018 Designed  All Rights Reserved</p>
                </div>
                <Contact/>
            </div>
        </div>
    );
};

export default Footer;