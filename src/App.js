import React, { Component } from 'react';
// Import css files
import './App.css';

// Import components
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home/>
                <About/>
                <Experience/>
                <Projects/>
            </div>
        );
    }
}

export default App;
