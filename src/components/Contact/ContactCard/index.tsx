import React from 'react';
import s from './styles.module.scss';

interface IProps {
	str: string;
	isImage: boolean;
	color: string;
}

const ContactCard: React.FC<IProps> = ({ str, isImage, color }) => {
	return (
		<div className={s.contactCard}>
			{isImage ? (
				<img className={s.imgContent} src={str} alt="img contact card" />
			) : (
				<p style={{ color }} className={s.textContent}>
					{str}
				</p>
			)}
		</div>
	);
};

export default ContactCard;
