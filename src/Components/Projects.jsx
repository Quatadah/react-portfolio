import React from "react";
import { renderWithColors } from "../utils/rendering";

const Projects = () => {
    return (
        <div id="projects" className="section mt-2 mt-lg-4">
            <div className="navigation">
                {renderWithColors("<Projects")} <br />
            </div>
            <div className="content">
                <div className="row">
                    <div className=" col-md-6">
                        <img
                            className="project-image "
                            src={require("../assets/mindmap.png")}
                        />
                    </div>
                    <div className="project-info col-md-6">
                        <h1>Project title</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Laboriosam quas reprehenderit cupiditate
                            similique nulla necessitatibus repudiandae quaerat
                            expedita optio perspiciatis a vitae voluptatibus,
                            accusantium id, totam ipsam autem deleniti magnam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
