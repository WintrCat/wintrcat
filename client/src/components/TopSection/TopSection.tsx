import React from "react";

import * as styles from "./TopSection.module.css";

function TopSection() {
    return <section className={styles.topSection}>
        <img className={styles.coffee} src="/img/hotchocolate.png"/>

        <span className={styles.title}>hi, i'm Wilson</span>
        <span className={styles.subtitle}>Developer, Video Editor, Chess Player.</span>
    </section>;
}

export default TopSection;