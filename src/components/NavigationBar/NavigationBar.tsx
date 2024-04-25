import React, { useEffect, useRef, useState } from "react";

import * as styles from "./NavigationBar.module.css";

function NavigationBar() {
    return <div className={styles.navigationBar}>
        <div className={styles.titleContainer}>
            <img className={styles.logo} src="/img/twigwhite.png" height="50" />
            <span className={styles.title}>WintrCat</span>
        </div>

        <div className={styles.navigationLinks}>
            <div className={styles.socialsContainer}>
                <a className={styles.socialIcon} href="https://github.com/wintrcat">
                    <img src="/img/github.svg" alt="GitHub" height="25" />
                </a>
                <a className={styles.socialIcon} href="https://youtube.com/@wintrcat">
                    <img src="/img/youtube.svg" alt="YouTube" height="25" />
                </a>
                <a className={styles.socialIcon} href="https://instagram.com/@wintrcat">
                    <img src="/img/instagram.svg" alt="Instagram" height="25" />
                </a>
            </div>

            <div className={styles.separator}></div>

            <div className={styles.pageSectionsContainer}>
                <a className={styles.pageSectionLink} href="">👋🏻 About Me</a>
                <a className={styles.pageSectionLink} href="">🚅 Projects</a>
                <a className={styles.pageSectionLink} href="">✉️ Contact</a>
            </div>
        </div>
    </div>;
}

export default NavigationBar;