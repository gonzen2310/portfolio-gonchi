import React from 'react';
import s from './styles.module.scss';
import ContentWrapper from '../ContentWrapper';
import Subtitle from '../Subtitle';
import Carousel from '../Carousel';

const Experience: React.FC = () => {
	return (
		<ContentWrapper>
			<div className={s.experience}>
				<Subtitle text={"Where I've worked"} />
				<div className={s.carouselWrapper}>
					<Carousel />
				</div>
			</div>
		</ContentWrapper>
	);
};

export default Experience;
