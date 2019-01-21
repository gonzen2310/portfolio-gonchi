import React from 'react';
import './Miscellaneous.css';
import Title from "../Title/Title";
import Button from "../Button/Button";
import ideasImg from "../../assets/ideas_ic.svg";

const Miscellaneous = () => {
    return(
        <div href={"miscellaneous"} className={'miscellaneous-component'}>
            <div className={'miscellaneous-component--content'}>
                <Title num = '04.' section= 'Miscellaneous'/>
                <p> This section contains many files including TA projects, personal photos, ideas, etc. This is a space
                    to  where I put all that has come to my mind or has happend to me. If you want to get to know me a little bit more click here
                </p>
                <img className={'miscellaneous-component--image'} src={ideasImg} alt=""/>
                <Button title = 'Know more about me'/>
            </div>
        </div>
    );
};

export default Miscellaneous;