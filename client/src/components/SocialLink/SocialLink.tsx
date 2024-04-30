import React from "react";

import * as styles from "./SocialLink.module.css";
import SocialLinkProps from "./SocialLinkProps";

const DEFAULT_IMAGE_HEIGHT = 25;

function SocialLink({ title, image, imageAltText, imageHeight, href }: SocialLinkProps) {
    return <a
        className={styles.socialIcon} 
        href={href}
        title={title}
    >
        <img src={image} alt={imageAltText} height={imageHeight || DEFAULT_IMAGE_HEIGHT} />
    </a>;
}

export default SocialLink;