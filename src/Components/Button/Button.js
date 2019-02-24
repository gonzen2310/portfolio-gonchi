import React from 'react';

import './Button.css';
import btnImage from '../../assets/button_ic.svg';


const Button = (props) => {
    return(
        (props.target) ? 
        <a href={props.link} target="_blank" rel="noopener noreferrer" className={'button-component'} role={'button'}>
            <img src={btnImage} alt="Button icon"/> {props.title}
        </a> :
        <a href={props.link} rel="noopener noreferrer" className={'button-component'} role={'button'}>
            <img src={btnImage} alt="Button icon"/> {props.title}
        </a> 
    );
};

export default Button;