import React, { useContext } from "react";
import styles from "./styles.module.css";
import {
	NavigationContext,
	INavigation
} from "../../contexts/NavigationContext";

const Sections: React.FC = () => {
	const { navigationToSection } = useContext<INavigation>(NavigationContext);

	return (
		<nav className={styles.sections}>
			<button onClick={() => navigationToSection("ABOUT")}>ABOUT</button>
			<button
				onClick={() => navigationToSection("EXPERIENCE")}
				className={styles.selected}
			>
				EXPERIENCE
			</button>
			<button onClick={() => navigationToSection("PROJECTS")}>PROJECTS</button>
			<button onClick={() => navigationToSection("CONTACT")}>CONTACT</button>
		</nav>
	);
};

export default Sections;
