import React from 'react';
import './Home.css';

import NavBar from './HomeComponents/NavBar/NavBar';
import Contact from './HomeComponents/Contact/Contact';
import Logo from './HomeComponents/Logo/Logo'
import Title from './HomeComponents/Title/Title';


const Home = () => {
    return (
        <div id={'App-Home'}>
            <NavBar />
            <Logo />
            <Title />
            <Contact />
        </div>
    );
};

export default Home;