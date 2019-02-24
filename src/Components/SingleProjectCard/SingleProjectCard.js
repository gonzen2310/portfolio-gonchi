import React from 'react';
import './SingleProjectCard.css';

const SingleProjectCard = ({title, description}) => {
    return (
        <div className={'single-project-card-component'}>
            <div className={'single-project-card-component--img'}>
                <img src="https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg" alt=""/> 
            </div>
            <div className={'single-project-card-component--content'}>    
                <h2>{title}</h2>
                <p>{description.substring(0, 80) + "..." }</p>
            </div>
        </div>
    )
}

export default SingleProjectCard;