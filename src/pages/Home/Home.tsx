import React from "react";

import NavigationBar from "@components/NavigationBar/NavigationBar";

import * as styles from "./Home.module.css";

function Home() {
    return <div className={styles.page}>
        <NavigationBar/>

        <section className={styles.topSection}>
            <img className={styles.coffee} src="/img/hotchocolate.png"/>

            <span className={styles.title}>hi, i'm Wilson</span>
            <span className={styles.subtitle}>Developer, Video Editor, Chess Player.</span>
        </section>

        <section>
            
        </section>
    </div>;
}

export default Home;