import React, {Component} from 'react';
import './Experience.css';
import Title from "../Title/Title";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

class Experience extends React.Component{
    render() {
        const experiences = [
            {
                position: "PSU Coders Club President",
                company: "@ SUNY Plattsburgh",
                style: "experience-card-component--position__red",
                date: "September '18 - present",
                place: "Plattsburgh, NY",
                achievements: [
                    "GONZALO ABCD",
                    "HECTOR ABCD",
                    "GAURAV ABC"
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
                    "Java", "Ruby"
                ]
            }
        ];

        return(
            <div className={'experience-component'}>
                <div className={'experience-component--content'}>
                    <Title num = '02' section= 'Experience'/>
                    <ExperienceCard experiences={experiences}/>
                </div>
            </div>
        );
    }
}

export default Experience;