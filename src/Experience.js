import React from 'react';
import './Experience.css';
import './ExperienceCard';
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    return(
        <div className={'experience-component'}>
            <div className={'experience-section'}>
                <h1>Experience</h1>
            </div>
            <ExperienceCard/>
        </div>
    );
};

export default Experience;