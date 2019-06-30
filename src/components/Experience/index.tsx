import React, { useContext } from "react";
import styles from "./styles.module.css";
import Card from "./Card";
import JobDescription from "./JobDescription";
import { EXPERIENCES } from "../../constants/experienceContent";
import { ExperienceContext } from "../../contexts/ExperienceContext";

export type Job = {
	id?: number;
	number: string;
	company: string;
	title: string;
	location: string;
	date: string;
	primaryColor: string;
	secondaryColor: string;
	image: string;
	bullets: string[];
};

const Experience: React.FC = () => {
	const experiences: Job[] = EXPERIENCES;
	const { currentExperience } = useContext(ExperienceContext);

	return (
		<div className={styles.experience}>
			<div className={styles["experience-wrapper"]}>
				<JobDescription job={currentExperience} />
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
