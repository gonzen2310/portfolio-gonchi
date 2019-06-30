import React from "react";
import styles from "./styles.module.css";
import heartIcon from "../../assets/heart-icon.svg";
import SocialMedia from "../SocialMedia";

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles["footer-wrapper"]}>
				<h1 className={styles["footer-logo"]}>
					Gonzalo<span>.</span>
				</h1>
				<p>
					Made with <img src={heartIcon} alt="Heart icon" /> with ReactJS
				</p>
				<SocialMedia />
			</div>
		</footer>
	);
};

export default Footer;
