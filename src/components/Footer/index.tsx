import React from 'react';
import s from './styles.module.scss';
import heartIcon from '../../assets/heart-icon.svg';
import SocialMedia from '../SocialMedia';
import ContentWrapper from '../ContentWrapper';

const Footer: React.FC = () => {
	return (
		<ContentWrapper>
			<footer className={s.footer}>
				<h1 className={s.logo}>
					Gonzalo<span>.</span>
				</h1>
				<p className={s.slogan}>
					Made with <img src={heartIcon} alt="Heart icon" /> with ReactJS
				</p>
				<SocialMedia />
			</footer>
		</ContentWrapper>
	);
};

export default Footer;
