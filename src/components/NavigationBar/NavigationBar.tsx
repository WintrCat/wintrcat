import React from "react";

import * as styles from "./NavigationBar.module.css";

function NavigationBar() {
    return <div className={styles.navigationBar}>
        <div className={styles.titleContainer}>
            <img className={styles.logo} src="/img/twigwhite.png" height="50" />
            <span className={styles.title}>WintrCat</span>
        </div>

        <div className={styles.navigationLinks}>
            <a className={styles.navigationLink} href="">👋🏻 About Me</a>
            <a className={styles.navigationLink} href="">🚅 Projects</a>
            <a className={styles.navigationLink} href="">✉️ Contact</a>
        </div>
    </div>;
}

export default NavigationBar;