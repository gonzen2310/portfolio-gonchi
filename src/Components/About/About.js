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
                    <p>
                        Hi there,
                        I'm Gonzalo Reyes, a junior student majoring in Computer Science program at SUNY Plattsburgh.
                        My passion is to build cool web and android applications using high quality software product and
                        My passion is to work and collaborate with
                        highly talented people to make products that would make an immediate impact using different and
                        the latest technologies. I firmly believe that software is meant to help people and solve real
                        world problems and this is why I founded Coding Hub, a club focused on improving the learning
                        experience and life quality of students on campus through convenient and sophisticated software
                        applications. Being part of X would expand and improve my skills to keep translating real
                        problems into viable solutions.

                        I am Gonzalo a student at SUNY Plattsburgh. My passion is to build high quality software product that
                        Currently I am the president and co-founder of the PSU Coders club, a club focused on developing software to
                        improve student's life on campus. Check out our dope projects here Currently I am the president and co-founder
                        of the PSU Coders club, a club focused on developing software to improve student's life on campus. Check out
                        our dope projects here Currently I am the president and co-founder of the PSU Coders club, a club focused on
                        developing software to improve student's life on campus. Check out our dope projects here. life on campus.
                    </p>
                    <Button title = 'resume'/>
                </div>
            </div>
        </div>
    );
};

export default About;