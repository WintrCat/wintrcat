import React from "react";

import NavigationBar from "@components/NavigationBar/NavigationBar";
import TopSection from "@components/TopSection/TopSection";
import AboutSection from "@components/AboutSection/AboutSection";
import StatisticsSection from "@components/StatisticsSection/StatisticsSection";
import ProjectsSection from "@components/ProjectsSection/ProjectsSection";
import ContactSection from "@components/ContactSection/ContactSection";

import * as styles from "./Home.module.css";

function Home() {
    return <>
        <div className={styles.topSectionContainer}>
            <NavigationBar/>
            <TopSection/>
        </div>

        <AboutSection/>
        <StatisticsSection/>
        <ProjectsSection/>
        <ContactSection/>
    </>;
}

export default Home;