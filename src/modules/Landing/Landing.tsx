"use client";
import React from "react";

import _cssg from "@/assets/cs+sg.jpg";

import styles from "./Landing.module.css";

/**
 *
 * @returns
 */
const Landing = (): JSX.Element => {
    React.useEffect(() => {}, []);

    return (
        <div className={styles.landing_container}>
            <div className={styles.landing_header}>
                {"Welcome to UD CS + Social Good!"}
            </div>
        </div>
    );
};

export default Landing;
