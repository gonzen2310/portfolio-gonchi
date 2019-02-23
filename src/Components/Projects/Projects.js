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
        url: 'https://psushuttle.com',
        imageBg: shutterImg
    };

    updateProject = (title, description, background, github, url, imageBg) => {
        this.setState({
            title, description, background, github, url, imageBg
        })
    };

    render() {
        return(
            <div id={"projects"} className={'projects-component'}>
                <Title num = '03.' section= 'Top Projects'/>
                <ProjectCard
                    background = {this.state.background}
                    title={this.state.title}
                    description={this.state.description}
                    imageBg = {this.state.imageBg}
                    github = {this.state.github}
                    url = {this.state.url}
                    updateProject={this.updateProject}/>
                <Button title='More projects'/>
            </div>
        )
    }
}

export default Projects;