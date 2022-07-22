import React from "react";
import { renderWithColors, renderWithColorsComma } from "../utils/rendering";

const imports = 'import { AboutMe, Skills, Projects, Resume } from "Life"';
const title = 'import { Quatadah } from "Nasdami"';
const portfolioStatement = "const Portfolio = () => {";
const portfolioStatement2 = "       return {";

const Home = () => {
    return (
        <div id="home" className="section">
            <p className="navigation">{renderWithColorsComma(imports)}</p>
            <div className="line"></div>
            <div className="title">
                <p className="navigation pt-lg-3 pt-2">
                    {renderWithColors(title)}
                </p>
            </div>
            <div className="content">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <div className="main-title text-white mt-4 mt-lg-1">
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
                            Hi, I'm Quatadah Nasdami, I'm currently studying at
                            the higher France school ENSEIRB-MATMECA. <br /> */
                        </div>

                        <div className="parag mt-5">
                            {renderWithColors(portfolioStatement)}
                            <br />
                            {renderWithColors(portfolioStatement2)}
                        </div>
                        <div className="text-center mt-5 pt-5">
                            <a href="#aboutme" class="btn-perso">
                                Scroll Down
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="drawing">
                            <div className="ellipse3"></div>
                            <div className="ellipse2"></div>
                            <div className="ellipse1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
