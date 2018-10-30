import React from 'react';
import Title from "../Title/Title";
import './Projects.css';
import ProjectCard from "../ProjectsCard/ProjectCard";
import Button from "../Button/Button";

const Projects = () => {
    return(
        <div className={'projects-component'}>
            <Title num = '04' section= 'Projects'/>
            <p> Here are my feature projects that I've developed throughout <br/> the past years. If you want to see
                all my projects click here</p>
            <ProjectCard/>
            <Button title='More projects'/>
        </div>
    )
};

export default Projects;