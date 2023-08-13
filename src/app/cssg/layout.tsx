import React from "react";

import { Navbar } from "@/common/components/Navbar";

import styles from "./layout.module.css";

/**
 *
 * @param param0
 * @returns
 */
const CSSGLayout = ({ children }: React.PropsWithChildren): JSX.Element => (
    <div className={styles.cssg_layout}>
        <Navbar cssOverride={styles.cssg_navbar} />
        <div className={styles.cssg_content} id="cssg_content">
            {children}
        </div>
    </div>
);

export default CSSGLayout;
