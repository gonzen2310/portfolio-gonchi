import React from 'react';
import './Title.css';

const Title = (props) => {
    return(
        <h1 className={'title-component'}><span>{props.num}.</span> {props.section}</h1>
    );
};

export default Title;