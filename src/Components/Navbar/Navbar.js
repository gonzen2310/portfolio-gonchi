import React from 'react';
import './Navbar.css';
import navLogo from  '../../assets/navlogo_ic.svg';
import burgerIc from '../../assets/burger_ic.svg';

const Navbar = () => {
    const openBar = (e) => {
        let toggleNav = document.getElementsByClassName("toggle-bar-component")[0];
        let wrapperNav = document.querySelector(".toggle-bar-component .toggle-bar-component--wrapper");
        e.target.style.height = "0px";
        wrapperNav.style.display = "flex";
        toggleNav.style.height = "100vh";
    }

    return(
        <nav className={'navbar-component'}>
            <img src={navLogo} alt="GR logo"/>
            <img onClick={openBar} src={burgerIc} alt="Burger icon"/>
        </nav>
    );
};

export default Navbar;