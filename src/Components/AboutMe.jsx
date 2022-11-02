import React from "react";
import { renderWithColors, renderWithColorsComma } from "../utils/rendering";

const AboutUs = () => {
    return (
        <div
            id="aboutme"
            className="section mt-2 mt-lg-4 justify-content-center"
        >
            <div className="navigation">
                {renderWithColors("<AboutMe ")} <br />
            </div>
            <div className="content">
                <div className="row ms-lg-5 ms-3 g-0 fw-bold">
                    <div className="col-lg-6">
                        {renderWithColors("img = {")}
                        <div
                            className="portfolio-img img-fluid"
                            alt="aboutme"
                        ></div>
                        {renderWithColorsComma("},")}
                    </div>
                    <div className="col-lg-6 align-self-center mt-lg-5">
                        {renderWithColors("text = {(")} <br />
                        {renderWithColors("<p>")}
                        <p className="aboutmeparagraph d-inline">
                            Hi, I’m Quatadah Nasdami, I am 22 years old and I am
                            a software engineering student. I love web
                            development, UI|UX, and mobile development. I like
                            game development as well. I am currently studying my
                            last year at the french higher school of engineering
                            ENSEIRB-MATMECA. <br />
                            To know more about me, check out my{" "}
                            <a
                                href="#"
                                className="text-decoration-none text-warning"
                            >
                                {"{<Resume />}"}
                            </a>
                            .
                        </p>
                        {renderWithColors("     </p>")} <br />
                        {renderWithColors(")}")} <br />
                    </div>
                </div>
                <div className="navigation mt-lg-5 pt-lg-4">
                    {renderWithColors("/>")}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
