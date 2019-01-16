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
        let github;
        const option1 = document.querySelector("#first-project");
        const option2 = document.querySelector("#second-project");
        const option3 = document.querySelector("#third-project");

        switch (e.target.innerHTML) {
            case '01':
                title = 'Shuttler';
                description = 'Shuttler is a mobile application, Android and iOS, to help students track the shuttler at SUNY Plattsburgh' +
                    'Users can see the shuttle position in real time displayed on a map';
                background = 'project-card-component--image__one';
                github = 'https://github.com/PSUCoders/Shuttler/tree/master/Shuttler';
                imageBg = shutterImg;
                option1.classList.add('project-card-component--nav--checked');
                option2.classList.remove('project-card-component--nav--checked');
                option3.classList.remove('project-card-component--nav--checked');
                this.props.updateProject(title, description, background, github, imageBg);
                break;
            case '02':
                title = 'Tutoring Hub';
                description = 'Tutoring Hub is a website that allows students rate the tutors at the Learning Center. ' +
                    'Students can write and read reviews about their tutors so can choose the best tutor for them based on' +
                    'their reviews. This website built using the MERN stack';
                github = 'https://github.com/PSUCoders/Shuttler/tree/master/Shuttler';
                background = 'project-card-component--image__two';
                imageBg = tutoringImg;
                option2.classList.add('project-card-component--nav--checked');
                option1.classList.remove('project-card-component--nav--checked');
                option3.classList.remove('project-card-component--nav--checked');
                this.props.updateProject(title, description, background, github, imageBg);
                break;
            case '03':
                title = 'Portfolio';
                description = 'My personal portfolio responsive website designed in AdobeXD and build with react to showcase ' +
                'my experiences, projects and let viewers get to know a little bit more about me';
                github = 'https://github.com/PSUCoders/Shuttler/tree/master/Shuttler';
                imageBg = portfolioImg;
                option3.classList.add('project-card-component--nav--checked');
                option1.classList.remove('project-card-component--nav--checked');
                option2.classList.remove('project-card-component--nav--checked');
                background = 'project-card-component--image__three';

                this.props.updateProject(title, description, background, github, imageBg);
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
                        <a href={this.props.github}>MORE</a>
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