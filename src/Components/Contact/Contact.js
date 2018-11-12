import React from 'react';
import './Contact.css';

// Contact images
import githubIc from '../../assets/github_ic.svg';
import gmailIc from '../../assets/gmail_ic.svg';
import codepenIc from '../../assets/codepen_ic.svg';
import spotifyIc from '../../assets/spotify_ic.svg';
import linkedinIc from '../../assets/linkedin_ic.svg';


const Contact = () => {
    return(
        <section className={'contact-component'}>
            <img id={'gmail_ic'} src={gmailIc} alt="Gmail"/>
            <img src={githubIc} alt="Github"/>
            <img src={linkedinIc} alt="LinkedIn"/>
            <img src={codepenIc} alt="Codepen"/>
            <img src={spotifyIc} alt="Spotify"/>
        </section>
    );
};

export default Contact;