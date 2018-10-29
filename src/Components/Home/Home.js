import React from 'react';
import landingImage from '../../assets/ic_landing.svg';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';

const Home = () => {
    return(
        <div className={'home-component'}>
            <Navbar/>
            <div className={'home-component--content'}>
                <div className={'home-component--text'}>
                    <h3>Hi, I'm</h3>
                    <h1>Gonchi</h1>
                    <h3>Web & android developer <br/>and UI/UX designer</h3>
                    <Contact/>
                </div>
                <img className={'home-component--image'} src={landingImage} alt=""/>
          </div>
      </div>
    );
};

export default Home;