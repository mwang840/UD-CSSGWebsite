"use client";
import React from "react";

import placeholderPfp from "@/assets/imgs/webp/placeholderpfp.webp";
import { useCSSInjection } from "@/hooks/injection";

import styles from "./EBoardContent.module.css";
import { EBoardMember } from "./EBoardMember/EBoardMember";
import { Divider } from "@/common/components/Divider";

/**
 *
 * @returns
 */
export const EBoardContent = (): JSX.Element => {
    useCSSInjection([
        { className: styles.eboard_body_injection, cssQuery: "body" },
        { className: styles.eboard_content, cssQuery: "#cssg_content" },
    ]);

    return (
        <div className={styles.eboard_content_members}>
            <EBoardMember
                imgPath={placeholderPfp.src}
                name="Charmain Pasicolan"
                title="Treasurer"
            />
            <Divider cssInjection={styles.eboard_divider} horizontal={false} />
            <EBoardMember
                alignRight
                imgPath={placeholderPfp.src}
                name="Charmain Pasicolan"
                title="Treasurer"
            />
            <Divider cssInjection={styles.eboard_divider} horizontal={false} />
            <EBoardMember
                imgPath={placeholderPfp.src}
                name="Charmain Pasicolan"
                title="Treasurer"
            />
            <Divider cssInjection={styles.eboard_divider} horizontal={false} />
            <EBoardMember
                alignRight
                imgPath={placeholderPfp.src}
                name="Charmain Pasicolan"
                title="Treasurer"
            />
        </div>
    );
};
