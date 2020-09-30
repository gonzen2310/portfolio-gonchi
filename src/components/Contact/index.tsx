import React from 'react';
import styles from './styles.module.scss';
import Button from '../Button';
import ContentWrapper from '../ContentWrapper';
import Subtitle from '../Subtitle';

const Contact: React.FC = () => {
	return (
		<ContentWrapper>
			<div className={styles.contact}>
				<Subtitle text="Let’s build something together" />
				{/* <div className={styles['contact-wrapper']}>
				<div className={styles['contact-wrapper-left']}>
					<img src={contactImg} alt="contact me" />
				</div>
				<div className={styles['contact-wrapper-right']}>
					<h1>Let's get in touch</h1>
					<p>
						Currently, I am looking for a software engineer intership for this Fall
						(2019). However, I always have time to work on other projects so, if you have
						any project, freelance job or ideas you would like to share with me please
						don't hesitate to reach out to me, I would be more than happy to help you and
						see what we can do together!
					</p>
					<Button text="Contact me" url={'mailto:reyesegonzalo@gmail.com'} />
				</div>
			</div> */}
				<p>
					Although currently I’m not looking for new opportunities, feel free to reach
					out! I always have time to work on new challenging and interesting projects. If
					you have any project or ideas you would like to share I would be more than happy
					to help you and see what we can do together
				</p>
				<Button text="Contact me" url="mailto:reyesegonzalo@gmail.com" />
			</div>
		</ContentWrapper>
	);
};

export default Contact;
