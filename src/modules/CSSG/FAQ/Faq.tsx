import React from "react";

import styles from "./Faq.module.css";
import { FAQContent } from "./FAQContent/FaqContent";

/**
 *
 * @returns
 */
const FAQ = (): JSX.Element => (
    <div className={styles.about_container}>
        <FAQContent />
    </div>
);

export default FAQ;
