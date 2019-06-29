import React, { useContext } from "react";
import styles from "./styles.module.css";
import { NavigationContext } from "../../contexts/NavigationContext";

const Sections: React.FC = () => {
	const section = useContext(NavigationContext);
	return (
		<nav className={styles.sections}>
			<a href="/">ABOUT</a>
			<a href="/" className={styles.selected}>
				EXPERIENCE
			</a>
			<a href="/">PROJECTS</a>
			<a href="/">CONTACT</a>
		</nav>
	);
};

export default Sections;
