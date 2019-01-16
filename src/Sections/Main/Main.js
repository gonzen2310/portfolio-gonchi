import React from 'react';
import "./Main.css";

// Import components
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import Projects from "../../Components/Projects/Projects";
import Miscellaneous from "../../Components/Miscellaneous/Miscellaneous";
import Touch from "../../Components/Touch/Touch";
import Footer from "../../Components/Footer/Footer";

class Main extends React.Component {
    render() {
        return (
            <div className="main-section">
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

export default Main;