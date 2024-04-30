import React from "react";
import ProjectProps from "./ProjectProps";

import * as styles from "./Project.module.css";

function Project({ background, emoji, title, href }: ProjectProps) {
    function handleClick() {
        open(href);
    }

    return <div 
        className={styles.project}
        onClick={handleClick}
        style={{
            backgroundImage: `url(${background})`
        }}
    >
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.title}>{title}</span>
    </div>;
}

export default Project;