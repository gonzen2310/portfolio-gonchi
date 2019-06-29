import React, { useContext } from "react";
import "./App.css";

import Landing from "./components/Landing";
import Sections from "./components/Sections";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import NavigationContextProvider, {
	NavigationContext
} from "./contexts/NavigationContext";

const renderSection = (section: string | null): React.ReactNode => {
	switch (section) {
		case "ABOUT":
			return <About />;
		case "EXPERIENCE":
			return <Experience />;
		case "CONTACT":
			return <Contact />;
		default:
			return null;
	}
};

const App: React.FC = () => {
	const section = useContext(NavigationContext);
	console.log("log", section);

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
