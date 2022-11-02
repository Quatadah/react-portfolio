import React from "react";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <div className="con">
            <Home />
            <div className="line"></div>
            <AboutMe />
            <div className="line"></div>
            <Skills />
            <div className="line"></div>
            <Projects />
            <div className="line"></div>
            <Contact />
        </div>
    );
};

export default App;
