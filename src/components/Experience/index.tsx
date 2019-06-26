import React from "react";
import styles from "./styles.module.css";

import Card from "./Card";

export type Job = {
	number: string;
	company: string;
	title: string;
	location: string;
	primaryColor: string;
	secondaryColor: string;
};

const Experience: React.FC = () => {
	const experiences = [
		{
			number: "01",
			company: "Codecademy",
			title: "SWE Intern",
			location: "New York, NY",
			primaryColor: "#204055",
			secondaryColor: "#325f7d"
		},
		{
			number: "02",
			company: "Coding Hub",
			title: "SWE Intern",
			location: "New York, NY",
			primaryColor: "#FF6975",
			secondaryColor: "#F8959D"
		},
		{
			number: "03",
			company: "Interbank",
			title: "SWE Intern",
			location: "New York, NY",
			primaryColor: "#00A94E",
			secondaryColor: "#00C55B"
		},
		{
			number: "04",
			company: "CS Department at SUNY Plattsburgh",
			title: "SWE Intern",
			location: "New York, NY",
			primaryColor: "#75DEEC",
			secondaryColor: "#69C9D6"
		},
		{
			number: "05",
			company: "Claude J. Clark Learning Center",
			title: "SWE Intern",
			location: "New York, NY",
			primaryColor: "#F7AA70",
			secondaryColor: "#F9C299"
		},
		{
			number: "06",
			company: "CS Department at SUNY Plattsburgh",
			title: "SWE Intern",
			location: "New York, NY",
			primaryColor: "#747FFF",
			secondaryColor: "#98A0FC"
		}
	];
	return (
		<div className={styles.experience}>
			<div className={styles["experience-wrapper"]}>
				<h1>EXPERIENCE</h1>
				<div className={styles["experience-wrapper-cards"]}>
					{experiences.map(experience => {
						return <Card key={experience.number} job={experience} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Experience;
