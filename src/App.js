import React from "react";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import "./App.css";

const App = () => {
    return (
        <div className="con">
            <Home />
            <div className="line"></div>
            <AboutMe />
        </div>
    );
};

export default App;
