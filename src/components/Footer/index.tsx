import React from "react";
import styles from "./styles.module.css";
import footerLogo from "../../assets/footer-logo.png";
import heartIcon from "../../assets/heart-icon.svg";
import Contact from "../SocialMedia";

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles["footer-wrapper"]}>
				<img
					className={styles["footer-logo"]}
					src={footerLogo}
					alt="Developed by Gonzalo"
				/>
				<p>
					Made with <img src={heartIcon} alt="Heart icon" /> with ReactJS
				</p>
				<Contact />
			</div>
		</footer>
	);
};

export default Footer;
