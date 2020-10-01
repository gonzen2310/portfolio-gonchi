import React from 'react';
import s from './styles.module.scss';

interface IProps {
	text: string;
}

const Subtitle: React.FC<IProps> = ({ text }) => {
	return <h2 className={s.subtitle}>{text}</h2>;
};

export default Subtitle;
