import React from "react";
import "./App.css";

import Landing from "./components/Landing";
import Sections from "./components/Sections";
import About from "./components/About";
import Footer from "./components/Footer";

const App: React.FC = () => {
	return (
		<div className="App">
			<Landing />
			<Sections />
			<About />
			<Footer />
		</div>
	);
};

export default App;
