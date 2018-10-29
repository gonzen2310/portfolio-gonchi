import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = (props) => {
    const {experiences} = props;
    const experienceList = experiences.map(experience => {
       return(
           <div>
               <div className={'experience-card-component'}>
                   <div className={'experience-card-component--container'}>
                       <h1 className={'experience-card-component--position'}>{experience.position} <span className={experience.style}>{experience.company}</span></h1>
                       <section className={'experience-card-component--info'}>
                           <h3 className={'experience-card-component--info__date'}>{experience.date}</h3>
                           <h3 className={'experience-card-component--info__place'}>{experience.place}</h3>
                       </section>
                       <ul className={experience.style}>
                           <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                               ut labore et dolore magna aliqua. Ut enim ad minim </li>
                           <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                               ut labore et dolore magna aliqua. Ut enim ad minim </li>
                           <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                               ut labore et dolore magna aliqua. Ut enim ad minim </li>
                       </ul>
                       <section className={'experience-card-component--skills'}>
                           <span>JavaScript</span>
                           <span>Python</span>
                       </section>
                   </div>
               </div>
           </div>
       );
    });
    return(
        <div className={'experience-list'} >
            {experienceList}
        </div>
    );
};

export default ExperienceCard;