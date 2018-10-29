import React from 'react';
import './Navbar.css';
import navLogo from  '../../assets/navlogo_ic.svg';
import burgerIc from '../../assets/burger_ic.svg';

const Navbar = () => {
    return(
        <nav className={'navbar-component'}>
            <img src={navLogo} alt=""/>
            <img src={burgerIc} alt=""/>
        </nav>
    );
};

export default Navbar;