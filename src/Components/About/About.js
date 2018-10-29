import React from 'react';
import Title from '../Title/Title';

import profileImage from '../../assets/ic_profile_photo.svg';
import './About.css';

const About = () => {
    return(
        <div className={'about-component'}>
            <div className={'about-component--container'}>
                <img className={'about-component--image'} src={profileImage} alt=""/>
                <div className={'about-component--content'}>
                    <Title num = '01' section ='About me'/>
                    <p>
                        Hi there,
                        I am Gonzalo a student at SUNY Plattsburgh. My passion is to build high quality software product that
                        Currently I am the president and co-founder of the PSU Coders club, a club focused on developing software to
                        improve student's life on campus. Check out our dope projects here Currently I am the president and co-founder
                        of the PSU Coders club, a club focused on developing software to improve student's life on campus. Check out
                        our dope projects here Currently I am the president and co-founder of the PSU Coders club, a club focused on
                        developing software to improve student's life on campus. Check out our dope projects here. life on campus.
                        Check out our dope projects here Currently I am the president and co-founder of the PSU Coders club, a
                        club focused on developing software to improve student's life on campus. Check out our dope projects here
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;