import React from "react";
import githubIc from "../../assets/github-ic.svg";
import facebookIc from "../../assets/facebook-ic.svg";
import gmailIc from "../../assets/gmail-ic.svg";
import instagramIc from "../../assets/instagram-ic.svg";
import linkedinIc from "../../assets/linkedin-ic.svg";
import styles from "./styles.module.css";

const SocialMedia: React.FC = () => {
	return (
		<nav className={styles.socialmedia}>
			<a href="mailto:reyesegonzalo@gmail.com">
				<img className={styles["icon-margin"]} src={gmailIc} alt="Gmail icon" />
			</a>
			<a href="https://www.facebook.com/gonzaloereyes">
				<img
					className={styles["icon-margin"]}
					src={facebookIc}
					alt="Facebook icon"
				/>
			</a>
			<a href="https://www.instagram.com/gonchi2310/">
				<img
					className={styles["icon-margin"]}
					src={instagramIc}
					alt="Instagram icon"
				/>
			</a>
			<a href="https://www.linkedin.com/in/gonzalo-reyes/">
				<img
					className={styles["icon-margin"]}
					src={linkedinIc}
					alt="Linkedin icon"
				/>
			</a>
			<a href="https://github.com/gonzen2310">
				<img
					className={styles["icon-margin"]}
					src={githubIc}
					alt="Github icon"
				/>
			</a>
		</nav>
	);
};

export default SocialMedia;
