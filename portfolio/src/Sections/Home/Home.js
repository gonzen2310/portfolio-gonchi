import React from 'react';
import './Home.css';

// Components
import NavBar from '../../Components/NavBar/NavBar';
import Title from '../../Components/Title/Title';
import Logo from '../../Components/Logo/Logo';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Logo />
            <Title />
        </div>
    );
};

export default Home;