"use client";
import React from "react";

import { useCSSInjection } from "@/hooks/injection";
import { CssgFormatMessage } from "@/lib/react-intl/CssgFormatMessage";

import styles from "./EventContent.module.css";

/**
 *
 * @returns the content page for the frequently asked questions page!
 */
export const EventContent = (): JSX.Element => {
    useCSSInjection([{ className: styles.Events_body, cssQuery: "body" }]);
    return (
        <h1 className={styles.title}>
            <CssgFormatMessage id="events" />
        </h1>
    );
};
