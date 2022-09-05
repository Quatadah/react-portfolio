import { render } from "@testing-library/react";
import React from "react";
import { renderWithColors } from "../utils/rendering";

const projects = [
    {
        name: "projectOne",
        image: require("../assets/mindmap.png"),
        title: "Project title",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quas reprehenderit cupiditate similique nulla necessitatibus repudiandae quaerat expedita optio perspiciatis a vitae voluptatibus, accusantium id, totam ipsam autem deleniti magnam.",
    },
    {
        name: "projectTwo",
        image: require("../assets/rungame.png"),
        title: "Project title",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quas reprehenderit cupiditate similique nulla necessitatibus repudiandae quaerat expedita optio perspiciatis a vitae voluptatibus, accusantium id, totam ipsam autem deleniti magnam.",
    },
    {
        name: "projectThree",
        image: require("../assets/velo.png"),
        title: "Project title",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quas reprehenderit cupiditate similique nulla necessitatibus repudiandae quaerat expedita optio perspiciatis a vitae voluptatibus, accusantium id, totam ipsam autem deleniti magnam.",
    },
    {
        name: "projectFour",
        image: require("../assets/mindmap.png"),
        title: "Project title",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quas reprehenderit cupiditate similique nulla necessitatibus repudiandae quaerat expedita optio perspiciatis a vitae voluptatibus, accusantium id, totam ipsam autem deleniti magnam.",
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
                                    <h1 className="text-center">
                                        {renderWithColors("<h1>")}
                                        {project.title}{" "}
                                        {renderWithColors("</h1>")}
                                    </h1>

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
