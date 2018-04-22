import React from 'react';
import './Contact.css';

// Import SVG
import LinkedIn from '../../../../Assets/linkedin.svg';
import Github from '../../../../Assets/github.svg';
import Email from '../../../../Assets/email.svg';
import Behance from '../../../../Assets/behance.svg';

const Contact = () => {
    return(
        <div className={'home-contact'}>
            <a href="mailto:gonzaloeladioreyes@hotmail.com"><img src={Email} className="contact-email" alt="email" /></a>
            <a href="https://www.linkedin.com/in/gonzalo-eladio-reyes/" target={'_blank'}><img src={LinkedIn} className="contact-linkedin" alt="linkedin" /></a>
            <a href="https://github.com/gonzen2310" target={'_blank'}><img src={Github} className="contact-github" alt="github" /></a>
            <a href="https://www.behance.net/greye003080b" target={'_blank'}><img src={Behance} className="contact-behance" alt="behance" /></a>
        </div>
    );
};

export default Contact;