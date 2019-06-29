import React, { createContext, useState } from "react";

export const NavigationContext = createContext<string | null>(null);

const NavigationContextProvider: React.FC = props => {
	const [section, setSection] = useState("ABOUT");

	return (
		<NavigationContext.Provider value={section}>
			{props.children}
		</NavigationContext.Provider>
	);
};

export default NavigationContextProvider;
