import React from "react";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import "./App.css";
import Skills from "./Components/Skills";

const App = () => {
    return (
        <div className="con">
            <Home />
            <div className="line"></div>
            <AboutMe />
            <div className="line"></div>
            <Skills />
            <div className="line"></div>
        </div>
    );
};

export default App;
