import React from "react";
import { renderWithColors, renderWithColorsComma } from "../utils/rendering";

const imports = `import { AboutMe, Skills, Projects, Resume } from "Life"`;
const pages = [
    { name: "AboutMe,", href: "#aboutme" },
    {
        name: "Skills,",
        href: "#skills",
    },
    {
        name: "Projects,",
        href: "#projects",
    },
    {
        name: "Resume",
        href: "#resume",
    },
];
const title = 'import { Quatadah } from "Nasdami"';
const portfolioStatement = "const Portfolio = () => {";
const portfolioStatement2 = "       return {";

const Home = () => {
    return (
        <div id="home" className="section">
            <p className="navigation">
                {renderWithColors("import {")}{" "}
                {pages.map((page) => (
                    <a href={page.href} className="text-decoration-none">
                        {renderWithColorsComma(page.name)}
                    </a>
                ))}
                {renderWithColors('} from "Life"')}
            </p>
            <div className="line"></div>
            <div className="title">
                <p className="navigation pt-lg-3 pt-2">
                    {renderWithColors(title)}
                </p>
            </div>
            <div className="content">
                <div className="row align-items-center">
                    <div className="col-md-6 ">
                        <div>
                            <div className="main-title text-white mt-3 mt-sm-1 ">
                                /*
                                <br />
                                <span className="first-line">
                                    HELLO WORLD,
                                </span>{" "}
                                <br />
                                IT'S QUATADAH
                            </div>
                        </div>
                        <div className="parag">
                            {" "}
                            Hi, I'm Quatadah Nasdami, I'm currently studying at
                            the higher France school ENSEIRB-MATMECA. <br /> */
                        </div>

                        <div className="parag my-5 py-5 my-md-3 py-md-3">
                            {renderWithColors(portfolioStatement)}
                            <br />
                            {renderWithColors(portfolioStatement2)}
                        </div>
                        <div className="text-center my-5 py-5">
                            <a href="#aboutme" className="btn-perso">
                                Get Started
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <div className="img-container">
                            <img
                                src={require("../assets/landing-image.png")}
                                alt="landing-image"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
