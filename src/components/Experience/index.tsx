import React from 'react';
import s from './styles.module.scss';
import ContentWrapper from '../ContentWrapper';
import Subtitle from '../Subtitle';
import Carousel from '../Carousel';
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

const Experience: React.FC = () => {
	return (
		<ContentWrapper>
			<AnimatePresence>
				<motion.div
					key="experience"
					className={s.experience}
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
					<Subtitle text={"Where I've worked"} />
					<div className={s.carouselWrapper}>
						<Carousel />
					</div>
				</motion.div>
			</AnimatePresence>
		</ContentWrapper>
	);
};

export default Experience;
