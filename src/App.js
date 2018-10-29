import React, { Component } from 'react';
// Import css files
import './App.css';

// Import components
import Home from './Components/Home/Home';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home/>
            </div>
        );
    }
}

export default App;
