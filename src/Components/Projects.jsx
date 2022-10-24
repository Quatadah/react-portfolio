import { render } from "@testing-library/react";
import React from "react";
import { renderWithColors } from "../utils/rendering";

const projects = [
    {
        name: "mindYourMap",
        image: require("../assets/mindmap.png"),
        title: "MindYourMap",
        description:
            "Interactive mind map application that allows users to create, edit, and share mind maps. Built with simple Html Css and Javascript.",
    },
    {
        name: "typingRace",
        image: require("../assets/rungame.png"),
        title: "TypingRace",
        description:
            "Simple typing game that allows users to improve their typing speed, built with React, Bootstrap. Also, includes 3 languages : English, French and Arabic.",
    },
    {
        name: "portfolioWebSite",
        image: require("../assets/portfolio.png"),
        title: "Portfolio",
        description:
            "My portfolio website, built with React, Bootstrap, designed with Figma.",
    },
];

const Projects = () => {
    return (
        <div id="projects" className="section mt-2 mt-lg-4">
            <div className="navigation">
                {renderWithColors("<Projects")} <br />
            </div>
            <div className="content">
                <div className="row">
                    {projects.map((project, index) => {
                        return (
                            <>
                                <h4>
                                    {project.name} = {renderWithColors("{(")}
                                </h4>
                                <div className="col-md-6 my-4">
                                    <img
                                        className="project-image "
                                        src={project.image}
                                    />
                                </div>
                                <div className="project-info col-md-6">
                                    <h2 className="text-center">
                                        {renderWithColors("<h1>")}
                                        {project.title}{" "}
                                        {renderWithColors("</h1>")}
                                    </h2>

                                    <p>
                                        {renderWithColors("<p>")}
                                        {project.description}{" "}
                                        {renderWithColors("</p>")}
                                    </p>
                                </div>
                                <div>{renderWithColors(")},")}</div>
                            </>
                        );
                    })}
                </div>
                <div className="navigation mt-lg-5 pt-lg-4">
                    {renderWithColors("/>")}
                </div>
            </div>
        </div>
    );
};

export default Projects;
