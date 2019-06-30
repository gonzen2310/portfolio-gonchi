import React, { createContext, useState } from "react";
import { Job } from "../components/Experience";
import codecademyLogo from "../assets/codecademy-logo.svg";

export interface IExperience {
	currentExperience: Job;
	chooseExeperience: Function;
}

const defaultExperience = {
	number: "01",
	company: "Codecademy",
	title: "SWE Intern",
	location: "New York, NY",
	primaryColor: "#204055",
	secondaryColor: "#325f7d",
	image: codecademyLogo,
	bullets: [
		"This summer I am interning at Codecademy and I am on the growth team",
		"This summer I am interning at Codecademy and I am on the growth team"
	]
};

export const ExperienceContext = createContext<IExperience>({
	currentExperience: defaultExperience,
	chooseExeperience: () => {}
});

const ExperienceContextProvider: React.FC = props => {
	const [currentExperience, setCurrentExperience] = useState(defaultExperience);

	const chooseExeperience = (experience: Job) => {
		setCurrentExperience(experience);
	};

	return (
		<ExperienceContext.Provider
			value={{ currentExperience, chooseExeperience }}
		>
			{props.children}
		</ExperienceContext.Provider>
	);
};

export default ExperienceContextProvider;
