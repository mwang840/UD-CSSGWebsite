import React from "react";

import { CssgFormatMessage } from "@/lib/react-intl";

import styles from "./EBoard.module.css";
import { EBoardContent } from "./EBoardContent/EBoardContent";

/**
 *
 * @returns
 */
const EBoard = (): JSX.Element => (
    <div className={styles.eboard_container}>
        <div className={styles.eboard_header}>
            <CssgFormatMessage id="eboardMembers" />
        </div>
        <EBoardContent />
    </div>
);

export default EBoard;
