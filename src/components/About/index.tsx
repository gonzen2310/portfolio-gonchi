import React from 'react';
import aboutPhoto from '../../assets/about-photo.svg';
import handImg from '../../assets/hand-icon.svg';
// @ts-ignore
import resume from '../../assets/resume-gonzalo-reyes.pdf';

import s from './styles.module.scss';
import Button from '../Button';
import Skills from './Skills';
import ContentWrapper from '../ContentWrapper';
import Subtitle from '../Subtitle';

const About: React.FC = () => {
	return (
		<ContentWrapper>
			<div className={s.about}>
				<section className={s.who}>
					<div className={s.left}>
						<img src={aboutPhoto} alt="Gonzalo Reyes Profile" />
					</div>
					<div className={s.right}>
						<Subtitle text="Who am I" />
						<p className={s.textContent}>
							Hello, there! I’m Gonzalo, aka Gonchi, a software engineer in Rochester, NY
							who enjoys crafting beautiful high-performing web and mobile apps for fun
							and for a living. I love to work on projects that solve real- world problems
							especially related to community building, finance and education.
						</p>
						<p className={s.textContent}>
							I am currently working at{' '}
							<a href="https://www.yelp.com" className={s.yelp}>
								Yelp
							</a>{' '}
							on the Ads Experience Team as a full-stack software engineer. Apart from
							coding, I am interested in UI/UX design, I like to play soccer, play with my
							dog and I love boba tea. Feel free to check out my resume!
						</p>
						<Button text="Resume" url={resume} />
					</div>
				</section>
				<Skills />
			</div>
		</ContentWrapper>
	);
};

export default About;
