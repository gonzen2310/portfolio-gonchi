import React, { useContext } from "react";
import styles from "./styles.module.css";
import codecademyLogo from "../../../assets/codecademy-logo.svg";
import { Job } from "..";

export type BulletIconProps = {
	color: string;
};

const BulletIcon: React.FC<BulletIconProps> = ({ color }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24.042"
		height="24.042"
		viewBox="0 0 24.042 24.042"
	>
		<rect
			width="12"
			height="12"
			transform="translate(12.021) rotate(45)"
			fill={color}
			opacity="1"
			className={styles.bullet}
		/>
	</svg>
);

export type BulletsProps = {
	bullets: string[];
	color: string;
};

const Bullets: React.FC<BulletsProps> = ({ bullets, color }) => {
	const list = bullets.map((bullet, idx) => {
		return (
			<div key={idx} className={styles["single-bullet"]}>
				<BulletIcon color={color} />
				<p>{bullet}</p>
			</div>
		);
	});
	return <div className={styles["bullets-wrapper"]}>{list}</div>;
};

export type JobDescriptionProps = {
	job: Job;
};

const JobDescription: React.FC<JobDescriptionProps> = ({ job }) => {
	return (
		<div className={styles["job-description"]}>
			<aside className={styles["job-description-left"]}>
				<img src={codecademyLogo} alt="" />
			</aside>
			<aside className={styles["job-description-right"]}>
				<h1>
					Software Engineer Intern at
					<span style={{ color: job.primaryColor }}> Codecademy</span>
				</h1>
				<div className={styles["job-information"]}>
					<p>{job.location}</p>
					<p>June 2019 - Present</p>
				</div>
				<Bullets bullets={job.bullets} color={job.primaryColor} />
			</aside>
		</div>
	);
};

export default JobDescription;
