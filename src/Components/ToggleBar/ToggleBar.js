import React from 'react';
import './ToggleBar.css';

const ToggleBar = () => {
    const closeBar = (e) => {
        let wrapperNav = document.querySelector(".toggle-bar-component .toggle-bar-component--wrapper");
        let burgerIcon = document.querySelector(".navbar-component img:nth-child(2)");
        burgerIcon.style.height = "20px";
        e.target.style.height = "0px";
        wrapperNav.style.display = "none";
    }


    return (
        <div onClick={closeBar} className={'toggle-bar-component'}>
            <div className={'toggle-bar-component--wrapper'}>
                <a href={"#about"}>About</a>
                <a href={"#experience"}>Experience</a>
                <a href={"#projects"}>Projects</a>
                <a href={"#miscellaneous"}>Miscellaneous</a>
                <a href={"#touch"}>Contact</a>
            </div>
        </div>
    );
}

export default ToggleBar;