import React from "react";
import SocialLink from "@components/SocialLink/SocialLink";

import * as styles from "./NavigationBar.module.css";

function NavigationBar() {
    return <div className={styles.navigationBar}>
        <div className={styles.titleContainer}>
            <img className={styles.logo} src="/img/twigwhite.png" height="50" />
            <span className={styles.title}>WintrCat</span>
        </div>

        <div className={styles.navigationLinks}>
            <div className={styles.socialsContainer}>
                <SocialLink
                    title="YouTube Channel"
                    image="/img/youtube.svg"
                    imageAltText="YouTube"
                    href="https://youtube.com/@wintrcat"
                />
                <SocialLink
                    title="Donate to me ❤️"
                    image="/img/kofi.svg"
                    imageAltText="Donate to me"
                    imageHeight="27"
                    href="https://ko-fi.com/wintrcat"
                />
                <SocialLink
                    title="GitHub"
                    image="/img/github.svg"
                    imageAltText="My GitHub"
                    href="https://github.com/wintrcat"
                />
            </div>

            <div className={styles.separator}></div>

            <div className={styles.pageSectionsContainer}>
                <a className={styles.pageSectionLink} href="#aboutSection">👋🏻 About Me</a>
                <a className={styles.pageSectionLink} href="#projectsSection">🚅 Projects</a>
                <a className={styles.pageSectionLink} href="#contactSection">✉️ Contact</a>
            </div>
        </div>
    </div>;
}

export default NavigationBar;