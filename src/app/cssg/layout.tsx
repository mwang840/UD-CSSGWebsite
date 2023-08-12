import React from "react";

import styles from "./layout.module.css";
import { Navbar } from "@/common/components/Navbar";

/**
 *
 * @param param0
 * @returns
 */
const CSSGLayout = ({ children }: React.PropsWithChildren): JSX.Element => (
    <div>
        <header>
            <Navbar />
        </header>
        {children}
    </div>
);

export default CSSGLayout;
