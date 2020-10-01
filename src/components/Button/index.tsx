import React from 'react';
import s from './styles.module.scss';

interface ButtonProps {
	text: string;
	url: string;
}

const Button: React.FC<ButtonProps> = ({ text, url }) => {
	return (
		<a className={s.button} href={url}>
			{text}
		</a>
	);
};

export default Button;
