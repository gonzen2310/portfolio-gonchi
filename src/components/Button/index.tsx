import React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
	text: string;
	url: string;
}

const Button: React.FC<ButtonProps> = ({ text, url }) => {
	return (
		<a className={styles.button} href={url}>
			{text}
		</a>
	);
};

export default Button;
