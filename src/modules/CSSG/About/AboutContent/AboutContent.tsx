"use client";
import React from "react";

import { useCSSInjection } from "@/hooks/injection";
import { CssgFormatMessage } from "@/lib/react-intl/CssgFormatMessage";

import styles from "./AboutContent.module.css";

/**
 *
 * @returns
 */
export const AboutContent = (): JSX.Element => {
    useCSSInjection([{ className: styles.about_body, cssQuery: "body" }]);

    return (
        <>
            <h1 className={styles.title}>{"About the club"}</h1>
            <div className={styles.description}>
                <CssgFormatMessage id="aboutDescription" />
            </div>
        </>
    );
};
