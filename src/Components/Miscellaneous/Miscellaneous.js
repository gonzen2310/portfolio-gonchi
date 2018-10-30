import React from 'react';
import './Miscellaneous.css';
import Title from "../Title/Title";
import Button from "../Button/Button";
import ideasImg from "../../assets/ideas_ic.svg";

const Miscellaneous = () => {
    return(
        <div className={'miscellaneous-component'}>
            <div className={'miscellaneous-component--content'}>
                <Title num = '05.' section= 'Miscellaneous'/>
                <p>I am Gonzalo a student at SUNY Plattsburgh. My passion is to build high quality <br/>
                    software product that My passion is to build high quality software product that</p>

                <img className={'miscellaneous-component--image'} src={ideasImg} alt=""/>
                <Button title = 'Know more about me'/>
            </div>
        </div>
    );
};

export default Miscellaneous;