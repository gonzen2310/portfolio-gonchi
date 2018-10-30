import React from 'react';
import Title from "../Title/Title";
import './Touch.css';
import touchImage from "../../assets/touch_img.svg";
import Button from "../Button/Button";

const Touch = () => {
    return(
        <div className={'touch-component'}>

            <div className={'touch-component--container'}>
                <img className={'touch-component--image'} src={touchImage} alt=""/>
                <div className={'touch-component--content'}>
                    <Title num = '' section= "Let's get in touch"/>
                    <p>
                        Hi there,
                        I am Gonzalo a student at SUNY Plattsburgh. My passion is to build high quality software product that
                        Currently I am the president and co-founder of the PSU Coders club, a club focused on developing software to
                        improve student's life on campus. Check out our dope projects here Currently I am the president and co-founder
                        of the PSU Coders club, a club focused on developing software to improve student's life on campus. Check out
                    </p>
                    <Button title = 'Say hi'/>
                </div>
            </div>
        </div>
    );
};

export default Touch;