import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" id={"navbar-link-about"} href="#">ABOUT</a>
                    <a className="nav-item nav-link" id={"navbar-link-skills"} href="#">SKILLS</a>
                    <a className="nav-item nav-link" id={"navbar-link-experience"} href="#">EXPERIENCE</a>
                    <a className="nav-item nav-link" id={"navbar-link-projects"} href="#">PROJECTS</a>
                    <a className="nav-item nav-link" id={"navbar-link-contact"} href="#">CONTACT</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;