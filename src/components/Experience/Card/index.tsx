import React, { useState } from "react";
import styles from "./styles.module.css";

const Card: React.FC = () => {
	return (
		<section className={styles.card}>
			<span className={styles["card-number"]}>01</span>
			<div className={styles["card-content"]}>
				<h2 className={styles["card-company"]}>Codecademy</h2>
				<p className={styles["card-position"]}>SWE Intern</p>
				<p className={styles["card-location"]}>New York, NY</p>
			</div>
		</section>
	);
};

export default Card;
