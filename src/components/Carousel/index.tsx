import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import s from './styles.module.scss';
import { EXPERIENCES } from '../../constants/experienceContent';
import leftArrow from '../../assets/arrow-left.svg';
import rightArrow from '../../assets/arrow-right.svg';

export type Job = {
	id: number;
	number: string;
	company: string;
	title: string;
	location: string;
	date: string;
	primaryColor: string;
	secondaryColor: string;
	bullets: string[];
};

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

const Carousel: React.FC = () => {
	const experiences: Job[] = EXPERIENCES;
	const [[page, direction], setPage] = useState([0, 0]);
	const experienceIndex = wrap(0, experiences.length, page);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<>
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					className={s.carousel}
					style={{
						backgroundColor: experiences[experienceIndex].primaryColor,
						color: 'white',
					}}
					key={experiences[experienceIndex].id}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 20 },
						opacity: { duration: 0.2 },
					}}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x);

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1);
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1);
						}
					}}
				>
					<div className={s.content}>
						<p className={s.header}>
							{experiences[experienceIndex].title} @
							<span> {experiences[experienceIndex].company}</span>
						</p>
						<ul>
							{experiences[experienceIndex].bullets.map((bullet, idx) => {
								return (
									<li className={s.bullet} key={idx}>
										{bullet}
									</li>
								);
							})}
						</ul>
					</div>
				</motion.div>
			</AnimatePresence>
			<div
				style={{ backgroundColor: experiences[experienceIndex].secondaryColor }}
				className={s.prev}
				onClick={() => paginate(-1)}
			>
				<img src={leftArrow} alt="left arrow" />
			</div>

			<div
				style={{ backgroundColor: experiences[experienceIndex].secondaryColor }}
				className={s.next}
				onClick={() => paginate(1)}
			>
				<img src={rightArrow} alt="right arrow" />
			</div>
		</>
	);
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

export default Carousel;
