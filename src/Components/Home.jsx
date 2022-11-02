import React from "react";
import { renderWithColors, renderWithColorsComma } from "../utils/rendering";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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
        <div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            id="home"
            className="section"
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: -100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                <p className="navigation">
                    {renderWithColors("import {")}{" "}
                    {pages.map((page, index) => (
                        <a
                            key={index}
                            href={page.href}
                            className="text-decoration-none"
                        >
                            {renderWithColorsComma(page.name)}
                        </a>
                    ))}
                    {renderWithColors('} from "Portfolio"')}
                </p>
                <div className="line"></div>
                <div className="title">
                    <p className="navigation pt-lg-3 pt-2">
                        {renderWithColors(title)}
                    </p>
                </div>
            </motion.div>
            <div className="content">
                <div className="row align-items-center">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -400,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        className="col-md-6 "
                    >
                        <div>
                            <div className="main-title text-white mt-3 mt-sm-1 ">
                                /*
                                <br />
                                <span className="first-line">
                                    HELLO WORLD,
                                </span>{" "}
                                <br />
                                I'M{" "}
                                <Typewriter words={["QUATADAH"]} loop={false} />
                            </div>
                        </div>
                        <div className="parag">
                            <p className="text-white">
                                I'm a{" "}
                                <Typewriter
                                    words={[
                                        "fullstack developer",
                                        "software engineer",
                                        "coffee addict",
                                    ]}
                                    loop={false}
                                />
                            </p>
                        </div>

                        <div className="parag my-5 py-5 my-md-3 py-md-3">
                            {renderWithColors(portfolioStatement)}
                            <br />
                            {renderWithColors(portfolioStatement2)}
                        </div>
                        <div className="text-center my-5 py-5">
                            <a
                                href="#aboutme"
                                className="btn-perso text-uppercase"
                            >
                                Start here
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 400,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        className="col-md-6 d-none d-md-block"
                    >
                        <div className="img-container">
                            <img
                                src={require("../assets/landing-image.png")}
                                alt="landing-image"
                                className="img-fluid"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
