import React from 'react';
import styles from './ProjectPage.module.scss';

//This is what's appearing on the Modal:

const ProjectPage = ({title, tech, description, alt, img, highlightsList, linkBlock}) => {
    return (
        <main className={styles.ProjectPage}>
            <h1>{title}</h1>
            <h2>{tech}</h2>
            <p>{description}</p>
            <img className={styles.Img} src={img} alt={alt}/>
            <h3>Tech highlights</h3>
            {highlightsList}
            {linkBlock}
        </main>
    )
}

export default ProjectPage;