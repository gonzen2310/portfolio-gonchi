import React from "react";
import styles from "./styles.module.css";

import Card from "./Card";

const Experience: React.FC = () => {
	return (
		<div className={styles.experience}>
			<div className={styles["experience-wrapper"]}>
				<h1>EXPERIENCE</h1>
				<Card />
			</div>
		</div>
	);
};

export default Experience;
