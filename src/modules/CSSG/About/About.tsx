import React from "react";

import styles from "./About.module.css";
import { AboutContent } from "./AboutContent/AboutContent";

/**
 *
 * @returns
 */
const About = (): JSX.Element => (
    <div className={styles.about_container}>
        <AboutContent />
    </div>
);

export default About;
