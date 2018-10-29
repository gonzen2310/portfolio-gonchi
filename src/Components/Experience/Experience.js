import React, {Component} from 'react';
import './Experience.css';
import Title from "../Title/Title";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

class Experience extends React.Component{
    state = {
        experiences: [
            {
                position: "PSU Coders Club President",
                company: "@ SUNY Plattsburgh",
                style: "experience-card-component--position__red",
                date: "September '18 - present",
                place: "Plattsburgh, NY",
                achievements: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
                ],
                skills: [
                    "JavaScript", "Python"
                ]
            },
            {
                position: "Digital Media Intern",
                company: "@ Interbank",
                style: "experience-card-component--position__green",
                date: "June '18 - August '18",
                place: "Lima, PE",
                achievements: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
                ],
                skills: [
                    "JavaScript", "Python"
                ]
            }

        ]
    };

    render() {
        return(
            <div className={'experience-component'}>
                <div className={'experience-component--content'}>
                    <Title num = '02' section= 'Experience'/>
                    <ExperienceCard experiences={this.state.experiences}/>
                </div>
            </div>
        );
    }
}

export default Experience;