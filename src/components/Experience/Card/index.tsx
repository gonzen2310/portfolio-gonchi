import React, { useContext } from "react";
import styles from "./styles.module.css";
import { Job } from "..";
import { ExperienceContext } from "../../../contexts/ExperienceContext";

export type CardProps = {
	job: Job;
};

const Card: React.FC<CardProps> = ({ job }) => {
	const { chooseExeperience } = useContext(ExperienceContext);

	const handleClick = () => {
		chooseExeperience(job);
		document.location.href = "#sections-bar";
	};

	return (
		<section
			onClick={handleClick}
			className={styles.card}
			style={{ backgroundColor: job.primaryColor }}
		>
			<span
				className={styles["card-number"]}
				style={{ backgroundColor: job.secondaryColor }}
			>
				{job.number}
			</span>
			<div className={styles["card-content"]}>
				<h2 className={styles["card-company"]}>{job.company}</h2>
				<p className={styles["card-position"]}>{job.title}</p>
				<p className={styles["card-location"]}>{job.location}</p>
			</div>
		</section>
	);
};

export default Card;
