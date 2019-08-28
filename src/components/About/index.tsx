import React from "react";
import aboutPhoto from "../../assets/about-photo.png";
import handImg from "../../assets/hand-img.svg";
// @ts-ignore
import resume from "../../assets/gonzalo-resume.pdf";

import styles from "./styles.module.css";

import Button from "../Button";
import Skills from "./Skills";

const About: React.FC = () => {
	return (
		<div className={styles.about}>
			<section className={styles.container}>
				<div className={styles["left-container"]}>
					<img src={aboutPhoto} alt="Gonzalo Reyes Profile" />
				</div>
				<div className={styles["right-container"]}>
					<p>
						Hi there! <img src={handImg} alt="Waving hand icon" />
						<br /> I'm Gonzalo, a web and android developer who enjoys building
						high quality and meaningful applications. Currently, I am a junior
						at SUNY Plattsburgh working towards improvement of the learning
						experience and life quality of students on campus through convenient
						and sophisticated software applications. I love to work with
						different and latest technologies, be involved in the whole
						development process and collaborate with extremely talented people
						to make products that would make an immediate impact. My projects
						always come from a problem I want to solve, and it is by solving
						that problem that I grow and develop my coding abilities. Since
						September 2018 I serve as the president of Coding Hub, an
						organization that develops web and mobile applications to solve real
						problems at SUNY Plattsburgh. This summer I will be interning at
						Codecademy!
					</p>
					<Button text="Resume" url={resume} />
				</div>
			</section>
			<Skills />
		</div>
	);
};

export default About;
