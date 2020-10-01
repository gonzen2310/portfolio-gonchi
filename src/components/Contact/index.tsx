import React from 'react';
import s from './styles.module.scss';
import Button from '../Button';
import ContentWrapper from '../ContentWrapper';
import Subtitle from '../Subtitle';
import rocketImg from '../../assets/rocket-img.svg';
import ContactCard from './ContactCard';
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

const contactCardsData = [
	{ str: 'U', isImage: false, color: '#79CFCD' },
	{ str: '+', isImage: false, color: '#204055' },
	{ str: 'ME', isImage: false, color: '#FFD049' },
	{ str: '=', isImage: false, color: '#204055' },
	{ str: rocketImg, isImage: true, color: '#FFFFFF' },
];

const Contact: React.FC = () => {
	return (
		<ContentWrapper>
			<AnimatePresence>
				<motion.div
					key="contact"
					className={s.contact}
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
					<Subtitle text="Let’s build something together" />

					<div className={s.cardsContainer}>
						{contactCardsData.map((card, idx) => {
							return <ContactCard key={idx} {...card} />;
						})}
					</div>

					<p className={s.text}>
						Although currently I’m not looking for new opportunities, feel free to reach
						out! I always have time to work on new challenging and interesting projects.
						If you have any project or ideas you would like to share I would be more than
						happy to help you and see what we can do together
					</p>
					<Button text="Contact me" url="mailto:reyesegonzalo@gmail.com" />
				</motion.div>
			</AnimatePresence>
		</ContentWrapper>
	);
};

export default Contact;
