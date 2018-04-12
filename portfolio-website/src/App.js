import React, { Component } from 'react';
import './App.css';
import image from './images/hesixteeneleven.png'

class App extends Component {
    render() {
        return (
            <div className={"App-background"}>
                <h1 className={"App-header"}>PAGE IN UNDER CONSTRUCTION. COME BACK SOON TO SEE WHATS NEW!!</h1>
                <div className={"App-image-box"}>
                    <img src={image}/>
                </div>
            </div>
        );
    }
}

export default App;
