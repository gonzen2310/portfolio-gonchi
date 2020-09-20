import React from 'react';
import s from './styles.module.scss';

const ContentWrapper: React.FC = ({ children }) => {
	return <div className={s.contentWrapper}>{children}</div>;
};

export default ContentWrapper;
