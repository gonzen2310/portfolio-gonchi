import React, { useContext, useState } from 'react';
import s from './styles.module.scss';
import { NavigationContext, INavigation } from '../../contexts/NavigationContext';
import ContentWrapper from '../ContentWrapper';

import aboutIcon from '../../assets/about-icon.svg';
import experienceIcon from '../../assets/experience-icon.svg';
import projectsIcon from '../../assets/projects-icon.svg';
import contactIcon from '../../assets/contact-icon.svg';

// import icons

const Sections: React.FC = () => {
	const { navigationToSection } = useContext<INavigation>(NavigationContext);

	const [selected, setSelected] = useState({
		about: true,
		experience: false,
		contact: false,
	});

	const handleClick = (e: any) => {
		navigationToSection(e.target.name.toUpperCase());
		setSelected({
			about: false,
			experience: false,
			contact: false,
			[e.target.name]: true,
		});
	};

	return (
		<ContentWrapper>
			<nav className={s.sections}>
				<button
					name="about"
					onClick={handleClick}
					className={selected.about ? s.selected : ''}
				>
					<img src={aboutIcon} alt="Landing profile" />
					<p>ABOUT</p>
				</button>
				<button
					name="experience"
					onClick={handleClick}
					className={selected.experience ? s.selected : ''}
				>
					<img src={experienceIcon} alt="Landing profile" />
					<p>EXPERIENCE</p>
				</button>
				{/* <button name="projects" onClick={handleClick}>
					PROJECTS
				</button> */}
				<button
					name="contact"
					onClick={handleClick}
					className={selected.contact ? s.selected : ''}
				>
					<img src={contactIcon} alt="Landing profile" />
					<p>CONTACT ME</p>
				</button>
			</nav>
		</ContentWrapper>
	);
};

export default Sections;
