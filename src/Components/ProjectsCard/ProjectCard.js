import React from 'react';
import './ProjectCard.css';
import shutterImg from '../../assets/shuttler_img.svg';
import visitImg from '../../assets/visit_ic.svg';
import githubImg from '../../assets/github_ic.svg';

class ProjectCard extends React.Component{
    clickHandler = (e) => {
        let title;
        let description;
        let background;
        const option1 = document.querySelector("#first-project");
        const option2 = document.querySelector("#second-project");
        const option3 = document.querySelector("#third-project");

        switch (e.target.innerHTML) {
            case '01':
                title = 'Shuttler';
                description = 'Currently I am the president and co-founder of the PSU Coders club, a club focused on ' +
                    'developing to Currently I am the president and co-founder of the PSU Coders club, a club' +
                    'focused on developing to Currently I am the president and co-founder of the PSU Coders club, a club' +
                    'focused on developing to';
                background = 'project-card-component--image__one';
                option1.classList.add('project-card-component--nav--checked');
                option2.classList.remove('project-card-component--nav--checked');
                option3.classList.remove('project-card-component--nav--checked');
                this.props.updateProject(title, description, background);
                console.log("CLICK FIRST");
                break;
            case '02':
                title = 'Tutoring Hub';
                description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                    'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
                background = 'project-card-component--image__two';
                option2.classList.add('project-card-component--nav--checked');
                option1.classList.remove('project-card-component--nav--checked');
                option3.classList.remove('project-card-component--nav--checked');
                this.props.updateProject(title, description, background);
                break;
            case '03':
                title = 'Ananda';
                description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
                    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
                    'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
                    ' voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
                option3.classList.add('project-card-component--nav--checked');
                option1.classList.remove('project-card-component--nav--checked');
                option2.classList.remove('project-card-component--nav--checked');
                background = 'project-card-component--image__three';

                this.props.updateProject(title, description, background);
                break;
            default:
                break;
        }
    };

    render() {
        return(
            <div className="project-card-component">
                <nav className={'project-card-component--nav'}>
                    <div id={'first-project'} onClick={this.clickHandler} className={'project-card-component--nav--checked'}>01</div>
                    <div id={'second-project'} onClick={this.clickHandler}>02</div>
                    <div id={'third-project'} onClick={this.clickHandler}>03</div>
                </nav>
                <div className={'project-card-component--description'}>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                    <section className={'project-card-component--description-more'}>
                        <a href="#">MORE</a>
                        <div className={'project-card-component--description-more__img'}>
                            <a href="https://github.com/PSUCoders/Shuttler"><img id={'ic_github'} src={githubImg} alt=""/></a>
                            <a href="https://github.com/PSUCoders/Shuttler"><img src={visitImg} alt=""/></a>
                        </div>
                    </section>
                </div>
                <div className={this.props.background}>
                    <img src={shutterImg} alt=""/>
                </div>
            </div>
    )}
}

export default ProjectCard;