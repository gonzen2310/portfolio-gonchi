import React from 'react';
import Title from "../Title/Title";
import './Touch.css';
import touchImage from "../../assets/touch_img.svg";
import Button from "../Button/Button";

const Touch = () => {
    return(
        <div className={'touch-component'}>

            <div id={"touch"} className={'touch-component--container'}>
                <img className={'touch-component--image'} src={touchImage} alt=""/>
                <div className={'touch-component--content'}>
                    <Title num = '' section= "Let's get in touch"/>
                    <p>
                        Currently, I am looking for a software engineer intership for this Fall (2019). However, I always 
                        have time to work on other projects so, if you have any project, freelance job or ideas you would like to share with me
                        please don't hesitate to reach out to me, I would be more than happy to help you and see what we can do together!
                    </p>
                    <Button title = 'Say hi' link = {"mailto:reyesegonzalo@gmail.com"} target = {false}/>
                </div>
            </div>
        </div>
    );
};

export default Touch;