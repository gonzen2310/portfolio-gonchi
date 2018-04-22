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
            <div className={'row'}>
                <div className={'col-4'}>
                    <Logo/>
                </div>
                <div className={'col-4'}>
                    <Title />
                </div>
                <div className={'col-4'}>
                    <Contact/>
                </div>
            </div>
        </div>
    );
};

export default Home;