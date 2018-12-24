import React from 'react';
import Title from '../Title/Title';

import profileImage from '../../assets/ic_profile_photo.svg';
import './About.css';
import Button from "../Button/Button";

const About = () => {
    return(
        <div className={'about-component'}>
            <div className={'about-component--container'}>
                <img className={'about-component--image'} src={profileImage} alt=""/>
                <div className={'about-component--content'}>
                    <Title num = '01.' section ='About me'/>
                    <div>
                        <p>
                            Hi there!,
                            I'm Gonzalo Reyes, a computer science enthusiast working towards improvement of the learning
                            experience and life quality of students at SUNY Plattsburgh through convenient and
                            sophisticated software applications. I firmly believe that software is meant to help people and
                            solve real world problems and this is why I founded <span><a href={"https://www.coding-hub.com"}>Coding Hub</a></span>
                        </p>
                    </div>
                    <Button title = 'resume'/>
                </div>
            </div>
        </div>
    );
};

export default About;