import React from 'react';
import './Experience.css';
import Title from "../Title/Title";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

class Experience extends React.Component{
    render() {
        const experiences = [
            {
                id: 0,
                position: "Incoming SWE Intern",
                company: "@ Codecademy",
                style: "experience-card-component--position__blue",
                date: "June '19 - August '19",
                place: "New York, NY",
                achievements: [
                    "This summer I will be interning at Codecademy as a Software Engineer"
                ],
                skills: []
            },
            {
                id: 1,
                position: "PSU Coders Club President",
                company: "@ SUNY Plattsburgh",
                style: "experience-card-component--position__blue",
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
                    "JavaScript", "Kotlin", "Flutter", "Java", "React", "Android", "WebDev", "Agile", "Scrum",
                    "PM", "Firebase", "Redux", "Protoype", "UI/UX", "Databases", "Github"
                ]
            },
            {
                id: 2,
                position: "Digital Media Intern",
                company: "@ Interbank",
                style: "experience-card-component--position__blue",
                date: "June '18 - August '18",
                place: "Lima, PE",
                achievements: [
                    "Developed a supervised ML text classifier with python to process customer reviews with an " +
                    "accuracy of 92% as measured by a confusion matrix",
                    "Built over 15 fully responsive in-apps and pop-ups for the bank app and website using HTML5, " +
                    "CSS3 and vanilla JS for A/B testing and experiments",
                    "Proactively participated in committee meetings to show and analyze weekly results as well as " +
                    "propose and discuss new experiments"
                ],
                skills: [
                    "Python", "HTML5", "CSS3", "JavaScript", "Scrum", "ML", "A/B Testing", "Data Science", "Analytics",
                    "Big Data", "Hadoop", "NPL"
                ]
            },
            {
                id: 3,
                position: "Teaching Assistant",
                company: "@ CS Department at SUNY Plattsburgh",
                style: "experience-card-component--position__blue",
                date: "January '18 - Present",
                place: "Plattsburgh, NY",
                achievements: [
                    "Aid 50+ students in their understanding of core programming concepts and projects using " +
                    "Python and C ",
                    "Hold office hours twice a week and provide one-on-one support to computer science students " +
                    "for CSC221 (Intro to programming) and CSC309 (C language)",
                ],
                skills: [
                    "Python", "C", "Tutoring", "CS Fundamentals", "TA"
                ]
            },
            {
                id: 4,
                position: "Academic Tutor",
                company: "@ Claude J. Clark Learning Center",
                style: "experience-card-component--position__blue",
                date: "September '17 - November '18",
                place: "Plattsburgh, NY",
                achievements: [
                    "Assisted students with class material, reviews and assignments",
                    "Tutored over 150 hours in 10 different courses including data structures, algorithms, python, C, C++ and calculus"
                ],
                skills: [
                    "Programming", "Teaching", "Tutoring", "Algorithms", "Data Structures", "Calculus"
                ]
            },
            {
                id: 5,
                position: "Android Developer",
                company: "@ CS Department at SUNY Plattsburgh",
                style: "experience-card-component--position__blue",
                date: "September '17 - November '18",
                place: "Plattsburgh, NY",
                achievements: [
                    "Worked together with Academic Advisor to assemble Burghy, an android application to help students find places on campus using indoor maps",
                    "Submitted weekly detailed reports and documentation",
                    "Presented application to the Computer Science Department"
                ],
                skills: [
                    "Java", "Android", "Google API", "Firebase", "Documentation", "Github", "Maps", "UI/UX", "Prototyping"
                ]
            }
        ];

        return(
            <div id={"experience"} className={'experience-component'}>
                <div className={'experience-component--content'}>
                    <Title num = '02.' section= 'Experience'/>
                    <ExperienceCard experiences={experiences}/>
                </div>
            </div>
        );
    }
}

export default Experience;