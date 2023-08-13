import React from "react";

import styles from "./Divider.module.css";

type DividerProperties = {
    readonly cssInjection?: string;
    readonly horizontal?: boolean;
};

/**
 *
 * @returns
 */
export const Divider = ({
    cssInjection,
    horizontal = true,
}: DividerProperties): JSX.Element => (
    <div
        className={`${horizontal ? styles.divider : styles.vertical_divider} ${
            cssInjection ?? ""
        }`}
    />
);
