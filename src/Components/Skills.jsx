import React from "react";
import { renderWithColors, renderWithColorsComma } from "../utils/rendering";
import DevIcon from "devicon-react-svg";

const softwareSkills = ["c", "c++", "c#", "cpp", "c#", "java"];

const frontEndSkills = [
    "html5",
    "css3",
    "javascript",
    "figma",
    "vuejs",
    "bootstrap",
    "tailwindcss",
];

const backEndSkills = [];

const mobileDevSkills = ["react-native"];

const otherSkills = [];

const devIconStyle = {
    fill: "yellow",
    width: "50px",
};

const renderSkills = (skills) => {
    return (
        <div>
            {skills.map((skill, index) => {
                return (
                    <span className="skill-img" alt="skill" key={index}>
                        <DevIcon icon={skill} style={devIconStyle} />
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
                <div className="row text-center s align-items-center">
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
                <div className="navigation mt-lg-5 pt-lg-4">
                    {renderWithColors("/>")}
                </div>
            </div>
        </div>
    );
};

export default Skills;
