import React, { Component } from 'react';
// Import css files
import './App.css';

// Import components
import Home from './Components/Home/Home';
import About from './Components/About/About';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home/>
                <About/>
            </div>
        );
    }
}

export default App;
