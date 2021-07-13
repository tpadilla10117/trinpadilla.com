import React from 'react';

import './AboutMe.css';
import PersonalCard from '../../feature/PersonalCards/personal_card.jsx';
import Trin from "../../../../src/assets/images/trin.jpg";
import { SiGithub, SiLinkedin, SiInstagram, SiFacebook, SiBehance  } from "react-icons/si";

const AboutMeComponent = (props) => {

    const { cardState, changeCardState } = props;

    return <> 
        <div id="mainPage-wrapper">
            <div id="bio-wrapper">

            {/* THIS IS FOR THE IMAGE OF ME*/}
                <div className="overlay-practice">
                    <div className="img-box">
                        <div className="img-container">
                            <img src={Trin} className="about-picture" alt="Trin Padilla" loading="lazy" id="left-image"></img>
                            
                        </div>
                        <div className="img-content">
                            <div>
                                <p>Hey There! I'm Trin!</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="sideBio">
                    
                    <h1>{/* Lead On Aspiring Dreamer In Neverending Glory */}Full Stack UX Engineer in Training</h1><br/>
                    <p>I'm a Jack-of-All-Trades: "Master of None though oftentimes better than a Master of One" type who's dediciated his life to both learning and specializing in the following trades: UX Design, Full Stack Web-Development, and Pro Audio.  I find myself fascinated with both the creative arts and problem solving.  When I'm not grooving out to a funk jam, you can find me "turtling" (slowly perfecting my craft), it up behind a code editor or DAW.  I have a knack for rapid ideation and creativity in each area of focus.  Like music, users experience web-applications every day, and one of my many responsibilities is to ensure those user experiences are profound, memorable, and inutitive (to name a few).  Whether behind a guitar, ProTools, pen & paper, Figma, or VS Code, it's my duty to convey these experiences in a manner that users will enjoy!  Get to know a bit more about me and my work below!   </p>
                    
                    <div className="links-about">
                                <a href="https://github.com/tpadilla10117" className="github">{<SiGithub size={45}/>}</a>
                                <a href="https://www.behance.net/tpadilla10117" className="behance">{<SiBehance size={45}/>}</a>
                                <a href="https://www.instagram.com/tpadilla10117/" className="instagram">{<SiInstagram size={45}/>}</a>
                                <a href="https://www.linkedin.com/in/t-p-101/" className="linkedin">{<SiLinkedin size={45}/>}</a>
                    </div>
                </div>
            </div>

            <div className="container">
                <PersonalCard cardState={cardState} changeCardState={changeCardState}/>
            </div>
            
        </div>
    
    </>
}

export default AboutMeComponent;