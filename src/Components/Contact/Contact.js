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
            <a href={"mailto:gonzaloeladioreyes2310@gmail.com"}><img id={'gmail_ic'} src={gmailIc} alt="Gmail"/></a>
            <a href={"https://www.github.com/gonzen2310"}><img src={githubIc} alt="Github"/></a>
            <a href={"https://www.linkedin.com/in/gonzalo-reyes"}><img src={linkedinIc} alt="LinkedIn"/></a>
            <a href={"https://codepen.io/gonzen2310/"}><img src={codepenIc} alt="Codepen"/></a>
            <a href={"/errortest"}><img src={spotifyIc} alt="Spotify"/></a>
        </section>
    );
};

export default Contact;