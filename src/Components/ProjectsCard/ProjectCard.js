import React from 'react';
import './ProjectCard.css';
import shutterImg from '../../assets/shuttler_img.png';
import tutoringImg from '../../assets/tutoring-hub_img.png';
import portfolioImg from '../../assets/portfolio_img.png';

import visitImg from '../../assets/visit_ic.svg';
import githubImg from '../../assets/github_ic.svg';

class ProjectCard extends React.Component{
    clickHandler = (e) => {
        let title;
        let description;
        let background;
        let imageBg;
        const option1 = document.querySelector("#first-project");
        const option2 = document.querySelector("#second-project");
        const option3 = document.querySelector("#third-project");

        switch (e.target.innerHTML) {
            case '01':
                title = 'Shuttler';
                description = 'Shuttler is a mobile application to help students track the shuttler at SUNY Plattsburgh' +
                    'so they can see where the shuttle is at any time.';
                background = 'project-card-component--image__one';
                imageBg = shutterImg;
                option1.classList.add('project-card-component--nav--checked');
                option2.classList.remove('project-card-component--nav--checked');
                option3.classList.remove('project-card-component--nav--checked');
                this.props.updateProject(title, description, background, imageBg);
                break;
            case '02':
                title = 'Tutoring Hub';
                description = 'Tutoring Hub is a responsive website that allows students rate the tutors at the Learning Center' +
                    'so they can choose the best tutor for them';
                background = 'project-card-component--image__two';
                imageBg = tutoringImg;
                option2.classList.add('project-card-component--nav--checked');
                option1.classList.remove('project-card-component--nav--checked');
                option3.classList.remove('project-card-component--nav--checked');
                this.props.updateProject(title, description, background, imageBg);
                break;
            case '03':
                title = 'Ananda';
                description = 'Ananda is cross-platform application build with flutter to track and time workouts';
                imageBg = portfolioImg;
                option3.classList.add('project-card-component--nav--checked');
                option1.classList.remove('project-card-component--nav--checked');
                option2.classList.remove('project-card-component--nav--checked');
                background = 'project-card-component--image__three';

                this.props.updateProject(title, description, background, imageBg);
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
                    <img src={this.props.imageBg} alt=""/>
                </div>
            </div>
    )}
}

export default ProjectCard;