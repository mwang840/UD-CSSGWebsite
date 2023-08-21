"use client";
import Image from "next/image";
import React from "react";

import meeting1 from "@/assets/imgs/png/meeting1.png";
import meeting2 from "@/assets/imgs/png/meeting2.png";
import { useCSSInjection } from "@/hooks/injection";
import { CssgFormatMessage } from "@/lib/react-intl";

import styles from "./Cssg.module.css";

/**
 *
 * @returns
 */
const CSSG = (): JSX.Element => {
    useCSSInjection([{ className: styles.cssg_background, cssQuery: "body" }]);

    return (
        <div className={styles.cssg_container}>
            <div className={styles.cssg_header}>{"Welcome to CS+SG!"}</div>
            <div className={styles.cssg_footer}>
                <Image
                    alt="A meeting at CS+SG, picture on the left"
                    className={`${styles.cssg_home_img} ${styles.cssg_home_img_left}`}
                    height={200}
                    src={meeting1.src}
                    width={200}
                />
                <div className={styles.cssg_description}>
                    <CssgFormatMessage id="cssgDescription" />
                </div>
                <Image
                    alt="A meeting at CS+SG, picture on the right"
                    className={`${styles.cssg_home_img} ${styles.cssg_home_img_right}`}
                    height={200}
                    src={meeting2.src}
                    width={200}
                />
            </div>
        </div>
    );
};

export default CSSG;
