import React from 'react';

import './Button.css';
import btnImage from '../../assets/button_ic.svg';
import resume from '../../assets/resume.pdf';


const Button = (props) => {
    return(
        <a href={resume} target = "_blank" rel="noopener noreferrer" className={'button-component'} role={'button'}>
            <img src={btnImage} alt="Button icon"/> {props.title}
        </a>

    );
};

export default Button;