import React from "react";
import { renderWithColors, renderWithColorsComma } from "../utils/rendering";
import DevIcon from "devicon-react-svg";

const softwareSkills = [
    require("../assets/clang.png"),
    require("../assets/c.png"),
    require("../assets/csharp.png"),
    require("../assets/python.png"),
    require("../assets/java.png"),
    require("../assets/php.png"),
    require("../assets/javascript.png"),
    require("../assets/typescript.png"),
];

const frontEndSkills = [
    require("../assets/html5.png"),
    require("../assets/css3.png"),
    require("../assets/javascript.png"),
    require("../assets/jquery.png"),
    require("../assets/react.png"),
    require("../assets/vuejs.png"),
    require("../assets/bootstrap.png"),
    require("../assets/next.png"),
    require("../assets/vite.png"),
];

const backEndSkills = [
    require("../assets/php.png"),
    require("../assets/node.png"),
    require("../assets/dotnet.png"),
    require("../assets/mongodb.png"),
    require("../assets/mysql.png"),
    require("../assets/postgresql.png"),
];

const mobileDevSkills = [
    require("../assets/react.png"),
    require("../assets/android.png"),
];

const otherSkills = [
    require("../assets/figma.png"),
    require("../assets/git.png"),
    require("../assets/npm.png"),
    require("../assets/linux.png"),
    require("../assets/unity.png"),
];

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
                        <img src={skills[index]} />
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
