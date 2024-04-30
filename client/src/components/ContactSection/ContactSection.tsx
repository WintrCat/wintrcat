import React from "react";

import * as styles from "./ContactSection.module.css";

function ContactSection() {
    return <section className={styles.contactSection} id="contactSection">
        <span className={styles.title}>Contact Me</span>

        <div className={styles.contactContainer}>
            <span>Email me at:</span>
            <a 
                className={styles.contactLink} 
                href="mailto:wintrcat.wilson@gmail.com"
            >
                wintrcat.wilson@gmail.com
            </a>
            <p>Let's work together!</p>
        </div>
    </section>;
}

export default ContactSection;