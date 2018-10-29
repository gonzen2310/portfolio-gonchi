import React, { Component } from 'react';
// Import css files
import './App.css';

// Import components
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Experience from "./Components/Experience/Experience";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home/>
                <About/>
                <Experience/>
            </div>
        );
    }
}

export default App;
