import React, { useState } from "react";
import "./App.css";

import Landing from "./components/Landing";
import Sections from "./components/Sections";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App: React.FC = () => {
	const [section, setSection] = useState("ABOUT");

	return (
		<div className="App">
			<Landing />
			<Sections />
			{/* <About /> */}
			{/* <Contact /> */}
			<Experience />
			<Footer />
		</div>
	);
};

export default App;
