"use client";
import React from "react";

import { CssgFormatMessage } from "@/lib/react-intl/CssgFormatMessage";

import styles from "./NotFound.module.css";

/**
 *
 * @returns
 */
export const NotFoundContent = (): JSX.Element => (
    <h1 className={styles.title}>
        <CssgFormatMessage id="notFound" />
    </h1>
);
