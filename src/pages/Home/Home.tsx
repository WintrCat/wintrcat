import React from "react";

import NavigationBar from "@components/NavigationBar/NavigationBar";
import TopSection from "@components/TopSection/TopSection";

import * as styles from "./Home.module.css";

function Home() {
    return <>
        <div className={styles.topSectionContainer}>
            <NavigationBar/>
            <TopSection/>
        </div>

        <section>

        </section>
    </>;
}

export default Home;