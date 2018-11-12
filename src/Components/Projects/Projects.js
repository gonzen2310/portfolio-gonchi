import React from 'react';
import Title from "../Title/Title";
import './Projects.css';
import ProjectCard from "../ProjectsCard/ProjectCard";
import Button from "../Button/Button";

class Projects extends React.Component{
    state = {
        title: 'Shuttler',
        description: 'Currently I am the president and co-founder of the PSU Coders club, a club focused on ' +
            'developing to Currently I am the president and co-founder of the PSU Coders club, a club ' +
            'focused on developing to Currently I am the president and co-founder of the PSU Coders club, a club\n' +
            'focused on developing to',
        background: 'project-card-component--image__one'
    };

    updateText1 = (title, description, background) => {this.setState({ title, description, background })};

    render() {
        return(
            <div className={'projects-component'}>
                <Title num = '04.' section= 'Projects'/>
                <p> Here are my feature projects that I've developed throughout <br/> the past years. If you want to see
                    all my projects click here</p>
                <ProjectCard background = {this.state.background} title={this.state.title} description={this.state.description} updateProject={this.updateText1}/>
                <Button title='More projects'/>
            </div>
        )
    }
}

export default Projects;