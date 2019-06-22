import React from "react";
import landingImage from "../../assets/landing-img.svg";
import navLogo from "../../assets/nav-logo.png";
import SocialMedia from "../SocialMedia";
import styles from "./styles.module.css";

const Navbar: React.FC = () => (
	<nav className={styles.navbar}>
		<img src={navLogo} alt="Navigation bar logo" />
	</nav>
);

const Landing: React.FC = () => {
	return (
		<div className={styles.landing}>
			<Navbar />
			<header className={styles.container}>
				<section className={styles["left-container"]}>
					<h2 className={styles.subheaders}>Hi, I'm</h2>
					<h1 className={styles.name}>Gonchi</h1>
					<h2 className={styles.subheaders}>
						Web & Android developer <br />
						UI/UX designer
					</h2>
					<SocialMedia />
				</section>
				<section className={styles["right-container"]}>
					<img
						className={styles["landing-img"]}
						src={landingImage}
						alt="Landing profile"
					/>
				</section>
			</header>
		</div>
	);
};

export default Landing;
