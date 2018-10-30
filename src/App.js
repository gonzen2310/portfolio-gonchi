import React, { Component } from 'react';
// Import css files
import './App.css';

// Import components
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Miscellaneous from "./Components/Miscellaneous/Miscellaneous";
import Touch from "./Components/Touch/Touch";
import Footer from "./Components/Footer/Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home/>
                <About/>
                <Experience/>
                <Projects/>
                <Miscellaneous/>
                <Touch/>
                <Footer/>
            </div>
        );
    }
}

export default App;
