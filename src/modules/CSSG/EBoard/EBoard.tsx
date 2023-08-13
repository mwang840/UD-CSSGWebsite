import React from "react";

import styles from "./EBoard.module.css";
import { EBoardContent } from "./EBoardContent/EBoardContent";

/**
 *
 * @returns
 */
const EBoard = (): JSX.Element => (
    <div className={styles.eboard_container}>
        <div className={styles.eboard_header}>{"EBoard Members"}</div>
        <EBoardContent />
    </div>
);

export default EBoard;
