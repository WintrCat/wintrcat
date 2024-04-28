import React, { useEffect } from "react";

import * as styles from "./StatisticsSection.module.css";

function StatisticsSection() {
    useEffect(() => {
        fetch("/api/statistics/latest", {
            method: "GET"
        }).then(async res => {
            
        }).catch(console.log);
    }, []);

    return <section className={styles.statisticsSection}>
        <div className={styles.container}>
            <div className={styles.videoContainer}>
                <iframe className={styles.video} src="https://www.youtube.com/embed/WJb4ekKJ73s"></iframe>
            </div>

            <div className={styles.statisticsContainer}>
                <div className={styles.statistic}>
                    <span className={styles.statisticValue}>7,153</span>
                    <span className={styles.statisticName}>subscribers</span>
                </div>

                <div className={styles.statistic}>
                    <span className={styles.statisticValue}>400,000</span>
                    <span className={styles.statisticName}>views</span>
                </div>

                <div className={styles.statistic}>
                    <span className={styles.statisticValue}>5</span>
                    <span className={styles.statisticName}>videos</span>
                </div>
            </div>

            <div className={styles.videoPointerContainer}>
                <img className={styles.videoPointer} src="/img/latestvideopointer.png" />
            </div>
        </div>
    </section>;
}

export default StatisticsSection;