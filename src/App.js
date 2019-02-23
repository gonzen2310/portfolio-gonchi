import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Import css files
import './App.css';

// Import section
import Main from './Sections/Main/Main';
import NotFound from './Sections/NotFound/NotFound';
import Projects from './Sections/Projects/Projects';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/projects' component={Projects} />
                    <Route component={NotFound} />
                </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
