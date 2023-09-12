import React from "react";

import styles from "./NotFound.module.css";
import { NotFoundContent } from "./NotFoundContent";

/**
 *
 * @returns
 */
export const NotFound = (): JSX.Element => (
    <div className={styles.error}>
        <NotFoundContent />
    </div>
);
