import React, { createContext, useState } from "react";
import { Job } from "../components/Experience";
import { EXPERIENCES } from "../constants/experienceContent";

export interface IExperience {
	currentExperience: Job;
	chooseExeperience: Function;
}

const defaultExperience = EXPERIENCES[0];

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
