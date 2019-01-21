import React from 'react';
import Title from '../Title/Title';

import profileImage from '../../assets/ic_profile_photo.svg';
import './About.css';
import Button from "../Button/Button";

const About = () => {
    return(
        <div id={"about"} className={'about-component'}>
            <div className={'about-component--container'}>
                <img className={'about-component--image'} src={profileImage} alt=""/>
                <div className={'about-component--content'}>
                    <Title num = '01.' section ='About me'/>
                    <div>
                        <p>
                            Hi there!,
                            I'm Gonzalo, a web and android developer who enjoys building exceptional high quality and meaningful applications. Currently, I 
                            am a junior at SUNY Plattsburgh working towards improvement of the learning experience and life quality of students on campus 
                            through convenient and sophisticated software applications. I love to work with different and latest technologies, be involved 
                            in the whole development process and work with extremely talented people to make products that would make an immediate impact. 
                            Most of my projects always come from a problem I want to solve, and it is by solving that problem that I grow and develop my 
                            coding abilities. Since September 2018 I serve as the president of <span><a href={"https://www.coding-hub.com"}>Coding Hub</a></span>, 
                            an organization that develops web and mobile applications to solve real problems at SUNY Plattsburgh.
                            <br/>
                            Here are a few languages and technologies I'm experienced with:
                                {/* Hi there!,
                            I'm Gonzalo Reyes, a computer science enthusiast working towards improvement of the learning
                            experience and life quality of students at SUNY Plattsburgh through convenient and
                            sophisticated software applications. I firmly believe that software is meant to help people and
                            solve real world problems and this is why I founded <span><a href={"https://www.coding-hub.com"}>Coding Hub</a></span> */}
                        </p>
                        <div className={'about-component--content__skills'}>
                            <div className={'about-component--content__skills--left'}>    
                                <p><span>&#128932;</span> Java</p>
                                <p><span>&#128932;</span> C/C++</p>
                                <p><span>&#128932;</span> Ruby</p>
                                <p><span>&#128932;</span> HTML & CSS</p>
                                <p><span>&#128932;</span> Node.js</p>
                            </div>
                            <div className={'about-component--content__skills--right'}>    
                                <p><span>&#128932;</span> JavaScript</p>
                                <p><span>&#128932;</span> Python </p>
                                <p><span>&#128932;</span> SQL</p>
                                <p><span>&#128932;</span> React.js</p>
                                <p><span>&#128932;</span> Android</p>
                            </div>
                        </div>
                    </div>
                    <Button title = 'resume'/>
                </div>
            </div>
        </div>
    );
};

export default About;