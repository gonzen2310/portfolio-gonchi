import React from "react";
import styles from "./styles.module.css";

import Card from "./Card";
import JobDescription from "./JobDescription";
import { EXPERIENCES } from "../../constants/experienceContent";

export type Job = {
	id: number;
	number: string;
	company: string;
	title: string;
	location: string;
	primaryColor: string;
	secondaryColor: string;
	bullets: string[];
};

const Experience: React.FC = () => {
	const experiences: Job[] = EXPERIENCES;

	return (
		<div className={styles.experience}>
			<div className={styles["experience-wrapper"]}>
				<JobDescription job={experiences[0]} />
				<div className={styles["experience-wrapper-cards"]}>
					{experiences.map(experience => {
						return <Card key={experience.id} job={experience} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Experience;
