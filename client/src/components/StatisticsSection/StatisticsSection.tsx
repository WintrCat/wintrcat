import React, { useEffect, useState } from "react";
import Statistics from "../../types/Statistics";

import * as styles from "./StatisticsSection.module.css";

function StatisticsSection() {
    const [statistics, setStatistics] = useState<Statistics>({});

    useEffect(() => {
        fetch("/api/statistics", {
            method: "GET"
        }).then(async res => {
            const statistics = await res.json();
            setStatistics(statistics);
        });
    }, []);

    return <section className={styles.statisticsSection}>
        <div className={styles.container}>
            <div className={styles.videoContainer}>
                <iframe className={styles.video} src={statistics.latestVideo}></iframe>
            </div>

            <div className={styles.statisticsContainer}>
                <div className={styles.statistic}>
                    <span className={styles.statisticValue}>{statistics.subscribers?.toLocaleString() || "0"}</span>
                    <span className={styles.statisticName}>subscribers</span>
                </div>

                <div className={styles.statistic}>
                    <span className={styles.statisticValue}>{statistics.views?.toLocaleString() || "0"}</span>
                    <span className={styles.statisticName}>views</span>
                </div>

                <div className={styles.statistic}>
                    <span className={styles.statisticValue}>{statistics.videos?.toLocaleString() || "0"}</span>
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