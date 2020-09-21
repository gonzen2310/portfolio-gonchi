import React from 'react';
import s from './styles.module.scss';
import bulletIcon from '../../../assets/bullet-icon.svg';
import { SKILLS } from '../../../constants/aboutContent';
import Subtitle from '../../Subtitle';

interface SkillsColumnProps {
	skills: Array<string>;
}

const SkillsColumn: React.FC<SkillsColumnProps> = ({ skills }) => {
	const skillsList = skills.map((skill) => (
		<div key={skill}>
			<p>{skill}</p>
		</div>
	));

	return <div className={s.skillsContainer}>{skillsList}</div>;
};

const Skills: React.FC = () => {
	const skills: { [label: string]: string[] } = SKILLS;

	return (
		<div className={s.skills}>
			<Subtitle text="Skills" />
			<div className={s.container}>
				{Object.keys(skills).map((column) => {
					return (
						<div className={s.column} key={column}>
							<h3 className={s.headline}>{column}</h3>
							<SkillsColumn skills={skills[column]} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
