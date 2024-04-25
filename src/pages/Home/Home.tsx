import React from "react";

import NavigationBar from "@components/NavigationBar/NavigationBar";
import TopSection from "@components/TopSection/TopSection";
import AboutSection from "@components/AboutSection/AboutSection";

import * as styles from "./Home.module.css";

function Home() {
    return <>
        <div className={styles.topSectionContainer}>
            <NavigationBar/>
            <TopSection/>
        </div>

        <AboutSection/>
    </>;
}

export default Home;