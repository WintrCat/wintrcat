import React from "react";

import * as styles from "./StatisticsSection.module.css";

function StatisticsSection() {
    return <section className={styles.container}>
        <div className={styles.videoContainer}>
            <iframe className={styles.video} src="https://www.youtube.com/embed/WJb4ekKJ73s"></iframe>
        </div>

        <div className={styles.statisticsContainer}>
            <div>
                <span className={styles.statisticValue}>7,113</span>
                <span className={styles.statisticName}>subscribers</span>
            </div> 
        </div>
    </section>
}

export default StatisticsSection;