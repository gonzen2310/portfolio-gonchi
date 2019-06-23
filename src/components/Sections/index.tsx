import React from "react";
import styles from "./styles.module.css";

const Sections: React.FC = () => (
	<nav className={styles.sections}>
		<a href="/">ABOUT</a>
		<a href="/" className={styles.selected}>
			EXPERIENCE
		</a>
		<a href="/">PROJECTS</a>
		<a href="/">CONTACT</a>
	</nav>
);

export default Sections;
