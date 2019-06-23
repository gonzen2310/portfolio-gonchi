import React from "react";
import "./App.css";

import Landing from "./components/Landing";
import Sections from "./components/Sections";
import About from "./components/About";

const App: React.FC = () => {
	return (
		<div className="App">
			<Landing />
			<Sections />
			<About />
		</div>
	);
};

export default App;
