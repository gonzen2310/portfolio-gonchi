import React, { createContext, useState } from 'react';

export interface INavigation {
	section: string;
	navigationToSection: (e: any) => void;
}

export const NavigationContext = createContext<INavigation>({
	section: '',
	navigationToSection: (e: any) => {
		return null;
	},
});

const NavigationContextProvider: React.FC = (props) => {
	const [section, setSection] = useState('ABOUT');

	const navigationToSection = (newSection: string) => {
		setSection(newSection);
	};

	return (
		<NavigationContext.Provider value={{ section, navigationToSection }}>
			{props.children}
		</NavigationContext.Provider>
	);
};

export default NavigationContextProvider;
