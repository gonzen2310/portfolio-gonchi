import React from 'react';
import "./Main.css";
// import axios from 'axios';

// Import components
import ToggleBar from "../../Components/ToggleBar/ToggleBar"
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import Projects from "../../Components/Projects/Projects";
import Miscellaneous from "../../Components/Miscellaneous/Miscellaneous";
import Touch from "../../Components/Touch/Touch";
import Footer from "../../Components/Footer/Footer";

class Main extends React.Component {
    // componentDidMount() {
    //     axios
    //     .get("http://165.227.105.244:3001/projects")
    //     .then((response) => {
    //         console.log(response.data);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // }
    render() {
        console.log("CIRCLE CI WORKFLOW DOCUMENTATION");
        return (
            <div className="main-section">
                <ToggleBar/>
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