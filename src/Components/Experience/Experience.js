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
                    "Lead and collaborate with an agile team of 6 developers to complete 4 major projects in a span " +
                    "of 3 months to assist students and organizations on campus",
                    "Conduct bi-weekly stand-up meetings and manage team by using Asana for assigning and tracking " +
                    "tasks and Slack for communication",
                    "Maintain Github repositories, solve merge conflicts and review pull requests"
                ],
                skills: [
                    "JavaScript", "Kotlin", "HTML", "CSS", "Java", "React", "Android", "WebDev", "Agile", "Scrum",
                    "PM", "Firebase", "Redux"
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
                    "Developed a supervised ML text classifier with python to process customer  reviews with an " +
                    "accuracy of 92% as measured by a confusion matrix",
                    "Built over 15 fully responsive in-apps and pop-ups for the bank app and website using HTML5, " +
                    "CSS3 and vanilla JS for A/B testing and experiments",
                    "Proactively participated in committee meetings to show and analyze weekly results as well as " +
                    "propose and discuss new experiments\n"
                ],
                skills: [
                    "Java", "Ruby"
                ]
            },
            {
                id: 2,
                position: "Teaching Assistant",
                company: "@ CS Department at SUNY Plattsburgh",
                style: "experience-card-component--position__green",
                date: "June '18 - August '18",
                place: "Lima, PE",
                achievements: [
                    "Aid 50+ students in their understanding of core programming concepts and projects using " +
                    "Python and C ",
                    "Hold office hours twice a week and provide one-on-one support to computer science students " +
                    "for CSC221 (Intro to programming) and CSC309 (C language)",
                ],
                skills: [
                    "Python", "C", "Tutoring"
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