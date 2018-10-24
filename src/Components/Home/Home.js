import React from 'react';
import './Home.css';
import mainImg from './assets/main_img.png';
import burgerIc from './assets/burger_ic.png';
import logoIc from './assets/logo_ic.png';
import gmail from './assets/gmail_ic.svg';
import linkedin from './assets/linkedin_ic.svg';
import codepen from './assets/codepen_ic.svg';
import github from './assets/github_ic.svg';
import spotify from './assets/spotify_ic.svg';


const Home = () => {
    return(
        <div className={'home-component'}>
            <div className={'home-component--top'}>
                <img id={'home-logo'} src={logoIc} alt="Logo icon"/>
                <img id={'home-burger'} src={burgerIc} alt="Burger icon"/>
            </div>
            <div className={'home-component--main'}>
                <div className={'home-component--main-text'}>
                    <h3>Hi, I'm</h3>
                    <h1>Gonchi</h1>
                    <h3>Web & android developer <br/> and UI/UX designer</h3>
                </div>
                <div className={'home-component--main-images'}>
                    <img id={'home-mainimg'} src={mainImg} alt="Home gonchi"/>
                </div>
                <div className={'home-component--main-contact'} >
                    <img id={'svg-gmail'} className={'home-component--svg'} src={gmail} alt="gmail icon"/>
                    <img id={'svg-github'} className={'home-component--svg'} src={github} alt="github icon"/>
                    <img id={'svg-linkedin'} className={'home-component--svg'} src={linkedin} alt="linkedin icon"/>
                    <img id={'svg-codepen'} className={'home-component--svg'} src={codepen} alt="codepen icon"/>
                    <img id={'svg-spotify'} className={'home-component--svg'} src={spotify} alt="spotify icon"/>
                </div>
            </div>


        </div>
    )
};

export default Home;