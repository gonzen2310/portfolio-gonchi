import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import sections
import Home from './Sections/Home/Home';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Home />
              {/*<About />*/}
              {/*<Skills />*/}
              {/*<Experience />*/}
              {/*<Projects />*/}
              {/*<Contact />*/}
          </div>
      );
  }
}

export default App;
