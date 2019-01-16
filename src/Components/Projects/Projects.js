import React from 'react';
import Title from "../Title/Title";
import './Projects.css';
import ProjectCard from "../ProjectsCard/ProjectCard";
import Button from "../Button/Button";

import shutterImg from '../../assets/shuttler_img.png';


class Projects extends React.Component{
    state = {
        title: 'Shuttler',
        description: 'Shuttler is a mobile application, Android and iOS, to help students track the shuttler at SUNY Plattsburgh' +
                    'Users can see the shuttle position in real time displayed on a map',
        background: 'project-card-component--image__one',
        github: 'https://github.com/PSUCoders/Shuttler/tree/master/Shuttler',
        imageBg: shutterImg
    };

    updateProject = (title, description, background, github, imageBg) => {
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
                    github = {this.state.github}
                    updateProject={this.updateProject}/>
                <Button title='More projects'/>
            </div>
        )
    }
}

export default Projects;