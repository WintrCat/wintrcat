import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "@components/NavigationBar/NavigationBar";

import * as styles from "./Unfound.module.css";

function Unfound() {
    return <>
        <div className={styles.topSectionContainer}>
            <NavigationBar/>

            <main className={styles.mainContainer}>
                <h1 className={styles.errorTitle}>404</h1>

                <p className={styles.errorMessage}>
                    Looks like you're lost.
                </p>
                
                <Link className={styles.returnLink} to="/">
                    Go Back Home
                </Link>
            </main>
        </div>
    </>;
}

export default Unfound;