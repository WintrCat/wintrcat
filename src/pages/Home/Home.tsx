import React from "react";

import NavigationBar from "@components/NavigationBar/NavigationBar";

import * as styles from "./Home.module.css";

function Home() {
    return <div className={styles.page}>
        <NavigationBar/>

        <section className={styles.topSection}>
            <img src="/img/hotchocolate.png" alt="" />
        </section>
    </div>;
}

export default Home;