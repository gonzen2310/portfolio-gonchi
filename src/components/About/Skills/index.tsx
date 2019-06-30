import React from "react";
import styles from "./styles.module.css";
import bulletIcon from "../../../assets/bullet-icon.svg";
import { SKILLS } from "../../../constants/aboutContent";

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
	const skills: { [x: string]: string[] } = SKILLS;

	return (
		<div className={styles.skills}>
			<h1 className={styles.title}>Skills</h1>
			<div className={styles["skills-container"]}>
				{Object.keys(skills).map(column => {
					return <SkillsColumn key={column} skills={skills[column]} />;
				})}
			</div>
		</div>
	);
};

export default Skills;
