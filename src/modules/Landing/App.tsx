import React from "react";

import _cssg from "@/assets/cs+sg.jpg";

import styles from "./App.module.css";

/**
 *
 * @returns
 */
export const App = (): JSX.Element => (
    <div className={styles.landing_container}>
        <div className={styles.landing_header}>
            {"Welcome to UD CS + Social Good!"}
        </div>
    </div>
);
