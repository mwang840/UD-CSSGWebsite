"use client";
import React from "react";

import { useCSSInjection } from "@/hooks/injection";
import { CssgFormatMessage } from "@/lib/react-intl/CssgFormatMessage";

import styles from "./FAQContent.module.css";

/**
 *
 * @returns
 */
export const FAQContent = (): JSX.Element => {
    useCSSInjection([{ className: styles.FAQ_body, cssQuery: "body" }]);
    return (
        <h1 className={styles.title}>
            <CssgFormatMessage id="faq" />
        </h1>
    );
};
