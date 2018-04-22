import React from 'react';
import './Logo.css';
import MainLogo from '../../../../Assets/logo.svg';


const Logo = () => {
    return(
        <div className={'home-logo'}>
            <img src={MainLogo} alt="logo"/>
        </div>
    );
};

export default Logo;