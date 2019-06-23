import React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
	text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
	return (
		<a className={styles.button} href="/">
			{text}
		</a>
	);
};

export default Button;
