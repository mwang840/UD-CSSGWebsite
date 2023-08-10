"use client";
import React from "react";
import { Button } from "react-bootstrap";

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
            <div className={styles.options_bar}>
                <Button
                    className={styles.home_button}
                    variant="outline-primary"
                >
                    <i className="fa-solid fa-home" />
                </Button>
            </div>
        </div>
    );
};

export default Landing;
