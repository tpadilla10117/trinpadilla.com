import React from 'react';

import {
    SiJavascript,
    SiJquery,
    SiCss3,
    SiHtml5,
    SiPostgresql,
    SiHeroku,
    SiNetlify,
    SiPostman
} from "react-icons/si";

import {
    FaNode,
    FaReact,
    FaBootstrap,
    FaGithub,
    FaGitAlt
} from "react-icons/fa";

import { AiOutlineConsoleSql } from "react-icons/ai";

const TechStackFooter = () => (
    <footer className="techStack-footer">
        <div className="skills-container">
            <div className="skills-images" data-aos="fade-in">
                <ul>
                    <li>
                        <SiJavascript
                            size="3em"
                            color="yellow"
                            style={ {backgroundColor: "black"}}
                        />
                    </li>
                    <li>
                        <SiHtml5 size="3em" color="f06529" />
                    </li>
                    <li>
                        <SiCss3 size="3em" color="2965f1" />
                    </li>
                    <li>
                        <AiOutlineConsoleSql size="3em" color="#00758F" />
                    </li>
                    <li>
                        <FaReact size="3em" color="61DBfB" />
                    </li>
                    <li>
                        <SiJquery size="3em" color="#0868AC" />
                    </li>
                    <li>
                        <FaBootstrap size="3em" color="563d7c" />
                    </li>
                    <li>
                        <SiPostgresql size="3em" color="336791" />
                    </li>
                    <li>
                        <FaNode size="3em" color="3C873A" />
                    </li>
                    <li>
                        <FaGithub size="3em" color="black" />
                    </li>
                    <li>
                        <FaGitAlt size="3em" color="f34f29" />
                    </li>
                    <li>
                        <SiPostman size="3em" color="EF5B25" />
                    </li>
                    <li>
                        <SiHeroku size="3em" color="6567a5" />
                    </li>
                    <li>
                        <SiNetlify size="3em" color="00C7B7" />
                    </li>
                </ul>

            </div>
        </div>
        <p>© 2021. All Rights Reserved to Trin Padilla.</p>
    </footer>
)

export default TechStackFooter;












/* © 2021. All Rights Reserved to Trin Padilla. */