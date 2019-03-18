import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = (props) => {
    const {experiences} = props;

    const experienceList = experiences.map(experience => {
        const achievementList = experience.achievements.map((achievement, idx) => {
            return(
                <li key={idx}>{achievement}</li>
            );
        });

        const skillsList = experience.skills.map( (skill, i) => {
            return(
                <span key={i}>{skill}</span>
            )
        });

       return(
            <div className={'experience-card-component'} key={experience.id}>
                <div className={'experience-card-component--container'}>
                    <h1 className={'experience-card-component--position'}>{experience.position} <span className={experience.style}>{experience.company}</span></h1>
                    <section className={'experience-card-component--info'}>
                        <h3 className={'experience-card-component--info__date'}>{experience.date}</h3>
                        <h3 className={'experience-card-component--info__place'}>{experience.place}</h3>
                    </section>
                    <ul className={experience.style}>
                        {achievementList}
                    </ul>
                    <section className={'experience-card-component--skills'}>
                        {skillsList}
                    </section>
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