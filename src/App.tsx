import React, { useContext } from "react";
import "./App.css";

import Landing from "./components/Landing";
import Sections from "./components/Sections";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { NavigationContext, INavigation } from "./contexts/NavigationContext";
import ExperienceContextProvider from "./contexts/ExperienceContext";

const renderSection = (section: string): React.ReactNode => {
	switch (section) {
		case "ABOUT":
			return <About />;
		case "EXPERIENCE":
			return (
				<ExperienceContextProvider>
					<Experience />
				</ExperienceContextProvider>
			);
		case "CONTACT":
			return <Contact />;
		default:
			return null;
	}
};

const App: React.FC = () => {
	const { section } = useContext<INavigation>(NavigationContext);

	return (
		<div className="App">
			<Landing />
			<Sections />
			{renderSection(section)}
			<Footer />
		</div>
	);
};

export default App;
