import React, { useEffect, useState } from "react";

import * as styles from "./AboutSection.module.css";
import * as profileStyles from "./Profile.module.css";

function AboutSection() {
    const [age, setAge] = useState(18);

    useEffect(() => {
        const nowDate = Date.now();
        const birthDate = new Date(2006, 3, 2);

        const elapsedTime = nowDate - birthDate.getTime();
        const elapsedYears = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365));

        setAge(elapsedYears);
    }, []);

    return <section className={styles.aboutSection} id="aboutSection">
        <div className={styles.titleContainer}>
            <span>A bit about</span>
            <span className={styles.titleMe}>me</span>
        </div>

        <div className={profileStyles.container}>
            <div className="center">
                <img className={profileStyles.image} src="/img/pfp.gif" alt="My Profile Picture" />
            </div>

            <div className={profileStyles.description}>
                <span>
                    Hello! My name is Wilson, and I'm a{age == 18 ? "n" : ""} {age} year old software developer
                    from the UK. I love to make websites among other silly things, and
                    have been using languages like TypeScript and Python to do that for
                    the last 4 or so years. Outside of coding, I produce devlog videos
                    for the apps I build and sometimes play a bit of Chess.
                </span>

                <div className={profileStyles.technologies}>
                    <img 
                        src="/img/python.png" 
                        alt="Python" 
                        height="40"
                        title="Python"
                    />
                    <img 
                        src="/img/javascript.png" 
                        alt="JavaScript" 
                        height="40"
                        title="JavaScript"
                    />
                    <img 
                        src="/img/typescript.png" 
                        alt="TypeScript" 
                        height="40"
                        title="TypeScript"
                    />
                    <img 
                        src="/img/html.png" 
                        alt="HTML" 
                        height="40"
                        title="HTML"
                    />
                </div>
            </div>
        </div>
    </section>;
}

export default AboutSection;