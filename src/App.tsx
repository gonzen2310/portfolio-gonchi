import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Landing from "./components/Landing";
import Sections from "./components/Sections";

const App: React.FC = () => {
	return (
		<div className="App">
			<Landing />
			<Sections />
		</div>
	);
};

export default App;
