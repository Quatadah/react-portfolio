import React from "react";
import { renderWithColors, renderWithColorsComma } from "../utils/rendering";

const softwareSkills = [
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
];

const frontEndSkills = [
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
];

const backEndSkills = [
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
];

const mobileDevSkills = [
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
];

const otherSkills = [
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
    require("../assets/portfolio.jpg"),
];

const renderSkills = (skills) => {
    return (
        <div>
            {skills.map((skill, index) => {
                return (
                    <span className="skill-img" alt="skill" key={index}>
                        <img src={skill} alt="skill" />
                    </span>
                );
            })}
        </div>
    );
};

const Skills = () => {
    return (
        <div id="skills" className="section mt-2 mt-lg-4">
            <div className="navigation">
                {renderWithColors("<Skills")} <br />
            </div>
            <div className="content">
                <div className="row text-center s">
                    <div className="col-lg-4">
                        <div className="skills-content text-lg-center text-start">
                            {renderWithColors("softwareDevelopment = {")}
                            {renderSkills(softwareSkills)}
                            {renderWithColorsComma("},")}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="skills-content text-lg-center text-start">
                            {renderWithColors("frontEnd= {")}
                            {renderSkills(frontEndSkills)}
                            {renderWithColorsComma("},")}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="skills-content text-lg-center text-start">
                            {renderWithColors("backEnd = {")}
                            {renderSkills(backEndSkills)}
                            {renderWithColorsComma("},")}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="skills-content text-lg-center text-start">
                            {renderWithColors("mobile = {")}
                            {renderSkills(mobileDevSkills)}
                            {renderWithColorsComma("},")}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="skills-content text-lg-center text-start">
                            {renderWithColors("other = {")}
                            {renderSkills(otherSkills)}
                            {renderWithColorsComma("},")}
                        </div>
                    </div>{" "}
                </div>
            </div>
        </div>
    );
};

export default Skills;
