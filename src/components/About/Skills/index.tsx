import React from "react";
import styles from "./styles.module.css";
import bulletIcon from "../../../assets/bullet-icon.svg";

interface SkillsColumnProps {
	skills: Array<string>;
}

const SkillsColumn: React.FC<SkillsColumnProps> = ({ skills }) => {
	const skillsList = skills.map(skill => (
		<div key={skill} className={styles.bullet}>
			<img src={bulletIcon} alt="bullet" /> <p>{skill}</p>
		</div>
	));

	return <div className={styles["skills-list-container"]}>{skillsList}</div>;
};

const Skills: React.FC = () => {
	const column1 = ["Java", "JavaScript", "C/C++", "Python", "Ruby"];
	const column2 = ["TypeScript", "HTML5", "CSS3 & SASS", "ReactJS", "NodeJS"];
	const column3 = ["Redux", "SQL", "Gith & Github", "Android", "Flutter"];
	const column4 = [
		"UI/UX design",
		"MongoDB",
		"AWS",
		"Algorithms",
		"Design Patterns"
	];

	return (
		<div className={styles.skills}>
			<h1 className={styles.title}>Skills</h1>
			<div className={styles["skills-container"]}>
				<SkillsColumn skills={column1} />
				<SkillsColumn skills={column2} />
				<SkillsColumn skills={column3} />
				<SkillsColumn skills={column4} />
			</div>
		</div>
	);
};

export default Skills;
