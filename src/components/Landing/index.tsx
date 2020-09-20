import React from 'react';
import landingImage from '../../assets/landing-img.svg';
import ContentWrapper from '../ContentWrapper';
import SocialMedia from '../SocialMedia';
import s from './styles.module.scss';
import handImg from '../../assets/hand-icon.svg';

const Landing: React.FC = () => {
	return (
		<ContentWrapper>
			<div className={s.landing}>
				<section className={s.left}>
					<h2 className={s.subheader}>
						Hi there! <img src={handImg} alt="Waving hand icon" /> I am
					</h2>
					<h1 className={s.name}>Gonchi</h1>
					<h2 className={s.subheader}>
						Web & Android developer <br />
						UI/UX designer
					</h2>
					{/* <SocialMedia /> */}
				</section>
				<section className={s.right}>
					<img className={s.landingImg} src={landingImage} alt="Landing profile" />
				</section>
			</div>
		</ContentWrapper>
	);
};

export default Landing;
