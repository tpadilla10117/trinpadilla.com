import React from 'react';

/* import './Landing.css'; */
/* import CrwnClothing from "../../../../src/assets/images/crwn_clothing_landing.png";
import Codalorians from "../../../../src/assets/images/codalorians.png";
import PixelDraw from "../../../../src/assets/images/pixel_draw.png";
import Postbook from "../../../../src/assets/images/postbook.png";
import RoboSearch from "../../../../src/assets/images/robo_search.png"; */
import TechStackFooter from '../Footer/Footer.jsx';
import { projects } from '../../../utils';
import { Modal, ProjectPage, SectionWrapper, CardWrapper, ProjectCard, LinkBlock, LinkButton, BulletList } from '../../index.js';

const Landing = (props) => {

    const { activeProject, setActiveProject, modalVisibility, setModalVisibility } = props;

/* Handler for making a modal visible: */
    const handleModalVisibility = (id) => {
        setModalVisibility(!modalVisibility)
        setActiveProject(projects.find(project => project.id === id));
    
    }

        return (
        <>

    {/* This is for the main cards on Landing Page: */}
        <SectionWrapper 
                id="projects"
                content={
                    <CardWrapper>
                    {projects.map(project => {
                        return (
                            
                        <ProjectCard
                            onClick={() => handleModalVisibility(project.id)}
                            title={project.title}
                            tech={project.tech}
                            cardCoverText={project.cardCoverText}
                            svgImg={project.svgImg}
                            img={project.img}
                            key={project.id}
                        />
                        )
                    })}
                    </CardWrapper>
                }
            />
        

    {/* The modal that appears when clicking a project card: */}
        {modalVisibility &&  
            <Modal onModalClose={() => setModalVisibility(false)} > 
            <ProjectPage 
                title={activeProject.title}
                tech={activeProject.tech}
                img={activeProject.img}
                alt={activeProject.alt}
                description={activeProject.description}
                techHighlightsList={
                    <BulletList 
                    listItems={
                        activeProject.techHighlights.map((highlight, i) => {
                        return <li key={i}>{highlight}</li>
                        })
                    }
                    listStyle="Modal"
                    />
                }
                linkBlock={
                    <LinkBlock>
                    {activeProject.links.map((link, i) => {
                        return <LinkButton key={i} text={link.text} type="PrimaryInverse" link={link.link} />
                    })}
                    </LinkBlock>
                }
                />   
                </Modal>
                }
            

        {/* <div className="projCard-container">

        
            <div className="projCard-box">
                <div className="img-wrapper">
                    <img src={CrwnClothing} alt="A clickable card of an application called `Crwn Clothing`"/>
                </div>

                <div className="details-box">
                <div className="content-box">
                    
                    <p>An e-commerce for Stylish, Trendy Clothing</p>
                </div>
                </div>
            </div>
        

            
            <div className="projCard-box">
                
                <div className="img-wrapper">
                    <img src={Codalorians} alt="A clickable card of an application called `Codalorians`"/>
                    
                </div>

                <div className="details-box">
                <div className="content-box">
                    
                    <p>An e-commerce for Musical Instruments</p>
                </div>
                </div>
            </div>
            

            
            <div className="projCard-box">
                <div className="img-wrapper">
                    <img src={PixelDraw} alt="A clickable card of an application called `Pixel Draw`"/>
                </div>

                <div className="details-box">
                <div className="content-box">
                    
                    <p>A Simple, Grid-Based, Pixel-Art Creator</p>
                </div>
                </div>
            </div>
            

            <a href="https://laughing-austin-fe12b7.netlify.app/#">
                <div className="projCard-box">
                    <div className="img-wrapper">
                        <img src={Postbook} alt="A clickable card of an application called `PostBook`"/>
                    </div>

                    <div className="details-box">
                    <div className="content-box">
                        
                        <p>An App Where Users Can Post Items For Sale</p>
                    </div>
                    </div>
                </div>
            </a>

            
                <div className="projCard-box">
                    <div className="img-wrapper">
                        <img src={RoboSearch} alt="A clickable card of an application called `Robo Search`"/>
                    </div>
                    
                    <div className="details-box">
                    <div className="content-box">
                        
                        <p>A Way To Search For Product Cards</p>
                    </div>
                    </div>
                </div>
            
        </div> */}
        
        <TechStackFooter />
      
        </>
        )
}

export default Landing;