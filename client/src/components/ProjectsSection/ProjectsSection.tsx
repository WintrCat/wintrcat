import React from "react";
import Project from "@components/Project/Project";

import * as styles from "./ProjectsSection.module.css";

function ProjectsSection() {
    return <section className={styles.projectsSection} id="projectsSection">
        <span className={styles.title}>Where are we going today?</span>

        <div className={styles.projectsContainer}>
            <Project
                background="/img/gridbackground.png"
                emoji="♟️"
                title="Game Report"
                href="https://chess.wintrcat.uk/"
            />

            <Project
                background="/img/gridbackground.png"
                emoji="🎬"
                title="Autoshorts"
                href="https://github.com/wintrcat/autoshorts"
            />

            <Project
                background="/img/gridbackground.png"
                emoji="🔠"
                title="Spellcast Solver"
                href="https://github.com/wintrcat/spellcastsolver"
            />
        </div>
    </section>;
}

export default ProjectsSection;