import React from "react";
import styles from "./styles.module.css";
import contactImg from "../../assets/contact-img.svg";
import Button from "../Button";
const Contact: React.FC = () => {
	return (
		<div className={styles.contact}>
			<div className={styles["contact-wrapper"]}>
				<div className={styles["contact-wrapper-left"]}>
					<img src={contactImg} alt="contact me" />
				</div>
				<div className={styles["contact-wrapper-right"]}>
					<h1>Let's get in touch</h1>
					<p>
						Currently, I am looking for a software engineer intership for this
						Fall (2019). However, I always have time to work on other projects
						so, if you have any project, freelance job or ideas you would like
						to share with me please don't hesitate to reach out to me, I would
						be more than happy to help you and see what we can do together!
					</p>
					<Button text="Contact me" url={"mailto:reyesegonzalo@gmail.com"} />
				</div>
			</div>
		</div>
	);
};

export default Contact;
