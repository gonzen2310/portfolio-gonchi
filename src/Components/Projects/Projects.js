import React from 'react';
import Title from "../Title/Title";
import './Projects.css';
import ProjectCard from "../ProjectsCard/ProjectCard";
import Button from "../Button/Button";

import shutterImg from '../../assets/shuttler_img.png';


class Projects extends React.Component{
    state = {
        title: 'Shuttler',
        description: 'Shuttler is a mobile application to help students track the shuttler at SUNY Plattsburgh' +
            'so they can see where the shuttle is at any time.',
        background: 'project-card-component--image__one',
        imageBg: shutterImg
    };

    updateProject = (title, description, background, imageBg) => {
        this.setState({
            title, description, background, imageBg
        })
    };

    render() {
        return(
            <div className={'projects-component'}>
                <Title num = '03.' section= 'Projects'/>
                <p> Here are my feature projects that I've developed throughout <br/> the past years. If you want to see
                    all my projects click here</p>
                <ProjectCard
                    background = {this.state.background}
                    title={this.state.title}
                    description={this.state.description}
                    imageBg = {this.state.imageBg}
                    updateProject={this.updateProject}/>
                <Button title='More projects'/>
            </div>
        )
    }
}

export default Projects;