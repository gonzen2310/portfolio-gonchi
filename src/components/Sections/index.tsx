import React from "react";
import styles from "./styles.module.css";

const Sections: React.FC = () => (
	<nav className={styles.sections}>
		<a href="/" className={styles.selected}>
			ABOUT
		</a>
		<a href="/">EXPERIENCE</a>
		<a href="/">PROJECTS</a>
		<a href="/">CONTACT</a>
	</nav>
);

export default Sections;
