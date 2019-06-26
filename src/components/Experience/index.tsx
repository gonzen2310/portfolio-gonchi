import React from "react";
import styles from "./styles.module.css";

import Card from "./Card";
import JobDescription from "./JobDescription";

export type Job = {
	number: string;
	company: string;
	title: string;
	location: string;
	primaryColor: string;
	secondaryColor: string;
	bullets: string[];
};

const Experience: React.FC = () => {
	const experiences = [
		{
			number: "01",
			company: "Codecademy",
			title: "SWE Intern",
			location: "New York, NY",
			primaryColor: "#204055",
			secondaryColor: "#325f7d",
			bullets: [
				"This summer I am interning at Codecademy and I am on the growth team",
				"This summer I am interning at Codecademy and I am on the growth team"
			]
		},
		{
			number: "02",
			company: "Coding Hub",
			title: "President and Cofounder",
			location: "Plattsburgh, NY",
			primaryColor: "#FF6975",
			secondaryColor: "#F8959D",
			bullets: [
				"This summer I am interning at Codecademy and I am on the growth team",
				"This summer I am interning at Codecademy and I am on the growth team"
			]
		},
		{
			number: "03",
			company: "Interbank",
			title: "Data Analyst Intern",
			location: "Lima, PE",
			primaryColor: "#00A94E",
			secondaryColor: "#00C55B",
			bullets: [
				"This summer I am interning at Codecademy and I am on the growth team",
				"This summer I am interning at Codecademy and I am on the growth team"
			]
		},
		{
			number: "04",
			company: "CS Department at SUNY Plattsburgh",
			title: "Teaching Assistant",
			location: "Plattsburgh, NY",
			primaryColor: "#75DEEC",
			secondaryColor: "#69C9D6",
			bullets: [
				"This summer I am interning at Codecademy and I am on the growth team",
				"This summer I am interning at Codecademy and I am on the growth team"
			]
		},
		{
			number: "05",
			company: "Claude J. Clark Learning Center",
			title: "Academic Tutor",
			location: "Plattsburgh, NY",
			primaryColor: "#F7AA70",
			secondaryColor: "#F9C299",
			bullets: [
				"This summer I am interning at Codecademy and I am on the growth team",
				"This summer I am interning at Codecademy and I am on the growth team"
			]
		},
		{
			number: "06",
			company: "CS Department at SUNY Plattsburgh",
			title: "Android Developer",
			location: "Plattsburgh, NY",
			primaryColor: "#747FFF",
			secondaryColor: "#98A0FC",
			bullets: [
				"This summer I am interning at Codecademy and I am on the growth team",
				"This summer I am interning at Codecademy and I am on the growth team"
			]
		}
	];
	return (
		<div className={styles.experience}>
			<div className={styles["experience-wrapper"]}>
				<JobDescription job={experiences[0]} />
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
