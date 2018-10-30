import React from 'react';
import './ProjectCard.css';
import shutterImg from '../../assets/shuttler_img.svg';

import visitImg from '../../assets/visit_ic.svg';
import githubImg from '../../assets/github_ic.svg';

class ProjectCard extends React.Component{
    render() {
        return(
            <div className="project-card-component">
                <nav className={'project-card-component--nav'}>
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                </nav>
                <div className={'project-card-component--description'}>
                    <h1>Shuttler</h1>
                    <p> Currently I am the president and co-founder of the PSU Coders club, a club focused on
                        developing to Currently I am the president and co-founder of the PSU Coders club, a club
                        focused on developing to Currently I am the president and co-founder of the PSU Coders club, a club
                        focused on developing to</p>
                    <section className={'project-card-component--description-more'}>
                        <a href="">MORE</a>
                        <div className={'project-card-component--description-more__img'}>
                            <a href="https://github.com/PSUCoders/Shuttler"><img src={githubImg} alt=""/></a>
                            <a href="https://github.com/PSUCoders/Shuttler"><img src={visitImg} alt=""/></a>
                        </div>
                    </section>
                </div>
                <div className={'project-card-component--image'}>
                    <img src={shutterImg} alt=""/>
                </div>
            </div>
    )}
}

export default ProjectCard;