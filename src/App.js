import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Import css files
import './App.css';

// Import section
import Main from './Sections/Main/Main';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact path='/' component={Main}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
