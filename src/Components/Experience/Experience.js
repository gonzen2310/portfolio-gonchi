import React from 'react';
import './Experience.css';
import Title from "../Title/Title";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

class Experience extends React.Component{
    render() {
        const experiences = [
            {
                id: 0,
                position: "PSU Coders Club President",
                company: "@ SUNY Plattsburgh",
                style: "experience-card-component--position__red",
                date: "September '18 - present",
                place: "Plattsburgh, NY",
                achievements: [
                    "Supervise and collaborate with an agile team of 8 developers to build, test and deploy high quality apps to help hundreds of students on campus",
                    "Conduct weekly scrum meetings and manage team by assigning tasks using Asana to track progress and Slack for communication",
                    "Act as a lead developer and administrate GitHub repository for projects"
                ],
                skills: [
                    "JavaScript", "Kotlin", "HTML", "CSS", "Java", "React", "Android", "WebDev", "Agile", "Scrum", "PM", "Firebase", "Redux"
                ]
            },
            {
                id: 1,
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
                    <Title num = '02.' section= 'Experience'/>
                    <ExperienceCard experiences={experiences}/>
                </div>
            </div>
        );
    }
}

export default Experience;