import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import {
	NavigationContext,
	INavigation
} from "../../contexts/NavigationContext";

const Sections: React.FC = () => {
	const { navigationToSection } = useContext<INavigation>(NavigationContext);

	const [selected, setSelected] = useState({
		about: true,
		experience: false,
		contact: false
	});

	const handleClick = (e: any) => {
		navigationToSection(e.target.name.toUpperCase());
		setSelected({
			about: false,
			experience: false,
			contact: false,
			[e.target.name]: true
		});
	};

	return (
		<nav id="sections-bar" className={styles.sections}>
			<div className={styles.container}>
				<button
					name="about"
					onClick={handleClick}
					className={selected.about ? styles["selected"] : ""}
				>
					ABOUT
				</button>
				<button
					name="experience"
					onClick={handleClick}
					className={selected.experience ? styles["selected"] : ""}
				>
					EXPERIENCE
				</button>
				{/* <button name="projects" onClick={handleClick}>
					PROJECTS
				</button> */}
				<button
					name="contact"
					onClick={handleClick}
					className={selected.contact ? styles["selected"] : ""}
				>
					CONTACT
				</button>
			</div>
		</nav>
	);
};

export default Sections;
