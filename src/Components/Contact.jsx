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
        link: "https://linkedin.com/quatadah",
    },
    {
        name: "gmail",
        link: "quatadah.nasdami@gmail.com",
    },
    {
        name: "instagram",
        link: "https://instagram.com/quatadah",
    },
];

const Contact = () => {
    return (
        <div id="contact" className="section mt-2 mt-lg-4">
            <div className="navigation">
                {renderWithColors("<Contact")} <br />
            </div>
            <div className="content">
                <div className="row">
                    <div className="col-5 mx-auto">
                        <ul className="list-group">
                            {socialMedia.map((social) => (
                                <li className="list-group-item">
                                    {social.name} ={" "}
                                    <a
                                        href={social.link}
                                        className="text-decoration-none"
                                    >
                                        {renderWithColors(
                                            `{ ${social.name}Link }`
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
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
