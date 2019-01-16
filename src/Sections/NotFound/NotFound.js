import React from 'react';
import './NotFound.css';
import EmptyImg from '../../assets/empty-img.png';

const NotFound = () => {
    return(
        <div className={'notfound-section'}>
            <div className={'notfound-section--wrapper'}>
                <h1> OOPS! </h1>
                <h2>PAGE NOT FOUND</h2>
                <img src={EmptyImg} alt=""/>
            </div>
        </div>
    );
}

export default NotFound;