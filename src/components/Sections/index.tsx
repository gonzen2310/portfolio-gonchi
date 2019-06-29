import React, { useContext } from "react";
import styles from "./styles.module.css";
import {
	NavigationContext,
	INavigation
} from "../../contexts/NavigationContext";

const Sections: React.FC = () => {
	const { navigationToSection } = useContext<INavigation>(NavigationContext);

	const handleClick = (e: any) => {
		navigationToSection(e.target.name.toUpperCase());
	};

	return (
		<nav className={styles.sections}>
			<button name="about" onClick={handleClick} className={styles["selected"]}>
				ABOUT
			</button>
			<button name="experience" onClick={handleClick}>
				EXPERIENCE
			</button>
			<button name="projects" onClick={handleClick}>
				PROJECTS
			</button>
			<button name="contact" onClick={handleClick}>
				CONTACT
			</button>
		</nav>
	);
};

export default Sections;
