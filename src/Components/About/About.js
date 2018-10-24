import React from 'react'
import './About.css'

const About = () => {
    return(
        <div className={'about-component'}>
            <div className={'about-section'}>
                <h1>About me </h1>
            </div>
            <div className={'about-content'}>
                <p>
                    Hi there, <br/>
                    I am Gonzalo a student at SUNY Plattsburgh. My passion is to build high quality software product that
                    Currently I am the president and co-founder of the PSU Coders club, a club focused on developing software to improve student's life on campus.
                    Check out our dope projects here Currently I am the president and co-founder of the PSU Coders club, a club focused on developing software to improve student's life on campus.
                    Check out our dope projects here Currently I am the president and co-founder of the PSU Coders club, a club focused on developing software to improve student's life on campus. Check out our dope projects here
                    <div>
                        <button>RESUME</button>
                    </div>
                </p>
            </div>
        </div>
    );
};

export default About;