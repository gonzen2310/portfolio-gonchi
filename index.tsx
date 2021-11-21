import React from 'react';
import aboutPhoto from '../../assets/about-photo.png';
// @ts-ignore
import resume from '../../assets/resume-gonzalo-reyes.pdf';
import s from './styles.module.scss';
import Button from '../Button';
import Skills from './Skills';
import ContentWrapper from '../ContentWrapper';
import Subtitle from '../Subtitle';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
	enter: {
		scale: 0,
		opacity: 0,
	},
	animate: {
		scale: 1,
		opacity: 1,
	},
	exit: {
		scale: 0,
		opacity: 0,
	},
};

const About: React.FC = () => {
	return (
		<ContentWrapper>
			<AnimatePresence>
				<motion.div
					key="about"
					className={s.about}
					variants={variants}
					initial="enter"
					animate="animate"
					exit="exit"
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
					}}
				>
					<section className={s.who}>
						<div className={s.left}>
							<img src={aboutPhoto} alt="Gonzalo Reyes Profile" />
						</div>
						<div className={s.right}>
							<Subtitle text="Who I am" />
							<p className={s.textContent}>
								Hello, there! I am Gonzalo, aka Gonchi, a software engineer in San Francisco,
								CA who enjoys crafting beautiful high-performing web and mobile apps for
								fun and for a living. I love to work on projects that solve real- world
								problems especially related to community building, finance and education.
							</p>
							<p className={s.textContent}>
								Currently, I am a software engineer at{' '}
								<a href="www.google.com" className={s.yelp}>
									Google
								</a>{' '}
								working on the Local Search Ads team. When I am not coding, I like to play 
                                soccer and play with my 2 adorable cats, Luna and Levi. Also, I love boba!
								Feel free to check out my resume!
							</p>
							<Button text="Resume" url={resume} />
						</div>
					</section>
					<Skills />
				</motion.div>
			</AnimatePresence>
		</ContentWrapper>
	);
};

export default About;
