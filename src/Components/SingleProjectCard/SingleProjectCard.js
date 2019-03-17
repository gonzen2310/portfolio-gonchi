import React from 'react';
import './SingleProjectCard.css';

const SingleProjectCard = ({title, image, description}) => {
    console.log(image);
    return (
        <div className={'single-project-card-component'}>
            <div className={'single-project-card-component--img'}>
                <img src={image} alt=""/> 
            </div>
            <div className={'single-project-card-component--content'}>    
                <h2>{title}</h2>
                <p>{description.substring(0, 80) + "..." }</p>
            </div>
        </div>
    )
}

export default SingleProjectCard;