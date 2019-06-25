import React from "react";
import "./App.css";

import Landing from "./components/Landing";
// import Sections from "./components/Sections";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App: React.FC = () => {
	return (
		<div className="App">
			<Landing />
			{/* <Sections /> */}
			{/* <About /> */}
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
