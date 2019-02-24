import React from 'react';
import './Projects.css';

// Import components
import SingleProjectCard from '../../Components/SingleProjectCard/SingleProjectCard';
import logo from '../../assets/navlogo_ic.svg';

const Projects = () => {
    const projectsData = [
        {
            project: "Shuttler App",
            image: "https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg",
            description: 
            "Shuttler is a mobile application, Android and iOS, to help students track the shuttler " +
            "at SUNY PlattsburghUsers can see the shuttle position in real time displayed on a map "
        },
        {
            project: "Tutoring Hub",
            image: "https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg",
            description: 
            "Tutoring Hub is a website that allows students rate the tutors at the Learning " +
            "Center. Students can write and read reviews about their tutors so can choose the best tutor" +
            "for them based ontheir reviews. This website built using the MERN stack"
        },
        {
            project: "Portfolio Website",
            image: "https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg",
            description: 
            "My personal portfolio responsive website designed in AdobeXD and built with react" + 
            " to showcase my experiences, projects and let viewers get to know a little bit more about me"
        },
        {
            project: "Ananda Timer",
            image: "https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg",
            description: "Anada is a cross-platform mobile application built with Flutter SDK "
        },
        {
            project: "Coding Hub Website",
            image: "https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg",
            description: "Lorem ipsum lorem ipsum lorem ipsum"
        },
        {
            project: "Shuttler Website",
            image: "https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg",
            description: "Lorem ipsum lorem ipsum lorem ipsum"
        },
        {
            project: "Proxy Grove",
            image: "https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg",
            description: "Lorem ipsum lorem ipsum lorem ipsum"
        },
        {
            project: "Burghy Android App",
            image: "https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg",
            description: "Lorem ipsum lorem ipsum lorem ipsum"
        },
        {
            project: "Smart Brain",
            image: "https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg",
            description: "Lorem ipsum lorem ipsum lorem ipsum"
        }
    ];

    const projectsList = projectsData.map(project => {
        return (        
            <SingleProjectCard title = {project.project } description = {project.description} />
        )
    });
    return (
        <div className={"projects-section"}>
            <a href="/"><img src={logo} alt=""/></a>
            <h1>PROJECTS</h1>
            <p>Lorem ipsum</p>
            <div className={'projects-section--wrapper'}>
                {projectsList}
            </div>
        </div>
    )
}

export default Projects;