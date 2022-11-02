import { render } from "@testing-library/react";
import React from "react";
import { renderWithColors } from "../utils/rendering";

const socialMedia = [
    {
        name: "github",
        link: "https://github.com/Quatadah",
    },
    {
        name: "twitter",
        link: "https://twitter.com/quatadah",
    },
    {
        name: "linkedin",
        link: "https://www.linkedin.com/in/quatadah-nasdami-0a5212187",
    },
    {
        name: "instagram",
        link: "https://instagram.com/quatadah",
    },
];

const Contact = () => {
    return (
        <div id="contact" className="mt-2 mt-lg-4 py-3">
            <div className="navigation">
                {renderWithColors("<Contact")} <br />
            </div>
            <div className="content">
                <div className="row">
                    <div className=" mx-auto">
                        <div className="fs-4">
                            {socialMedia.map((social, index) => (
                                <div
                                    className="bg-transparent text-center text-white border-0"
                                    key={index}
                                >
                                    {social.name} ={" "}
                                    <a
                                        href={social.link}
                                        className="text-decoration-none"
                                        target={"_blank"}
                                    >
                                        {renderWithColors(
                                            `{ ${social.name}Link }`
                                        )}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="navigation mt-lg-5 pt-lg-4">
                    {renderWithColors("/>")}
                </div>
            </div>
        </div>
    );
};

export default Contact;
