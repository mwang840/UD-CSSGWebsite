"use client";
import React from "react";

import { useCSSInjection } from "@/hooks/injection";
import { CssgFormatMessage } from "@/lib/react-intl";

import styles from "./Cssg.module.css";

/**
 *
 * @returns
 */
const CSSG = (): JSX.Element => {
    useCSSInjection([{ className: styles.cssg_background, cssQuery: "body" }]);

    return (
        <div className={styles.cssg_container}>
            <div className={styles.cssg_header}>{"Welcome to CS+SG!"}</div>
            <div className={styles.cssg_description}>
                <CssgFormatMessage id="cssgDescription" />
            </div>
        </div>
    );
};

export default CSSG;
