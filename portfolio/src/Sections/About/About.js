import React from 'react';
import './About.css';

// Components
import Title from './AboutComponents/Title/Title';
// import Photo from './HomeComponents/Contact/Contact';
import Text from './AboutComponents/Text/Text';
import ResumeButton from './AboutComponents/ResumeButton/ResumeButton';


const About = () => {
    return (
        <div id={'App-About'}>
            <Title/>
            {/*<Photo/>*/}
            <Text/>
            <ResumeButton/>
        </div>
    );
};

export default About;