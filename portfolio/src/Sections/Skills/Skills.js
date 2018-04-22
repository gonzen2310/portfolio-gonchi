import React from 'react';
import './Skills.css';

// Components
import Title from './SkillsComponents/Title/Title';
import SkillsCards from './SkillsComponents/SkillsCards/SkillsCards';

const Skills = () => {
    return(
        <div id={'App-skills'}>
            <Title />
            <SkillsCards/>
        </div>
    );
};

export default Skills;