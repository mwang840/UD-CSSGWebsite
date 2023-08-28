"use client";
import React from "react";
import { useIntl } from "react-intl";

import aman from "@/assets/imgs/jpg/amansingh.jpg";
import benita from "@/assets/imgs/jpg/benita.jpg";
import diya from "@/assets/imgs/jpg/diya.jpg";
import mwang from "@/assets/imgs/jpg/mwang.jpg";
import sneha from "@/assets/imgs/jpg/sneha.png";
import charmaine from "@/assets/imgs/png/charmaine.png";
import { Divider } from "@/common/components/Divider";
import { useCSSInjection } from "@/hooks/injection";

import styles from "./EBoardContent.module.css";
import { EBoardMember } from "./EBoardMember/EBoardMember";

/**
 *
 * @returns
 */
export const EBoardContent = (): JSX.Element => {
    useCSSInjection([
        { className: styles.eboard_body_injection, cssQuery: "body" },
        { className: styles.eboard_content, cssQuery: "#cssg_content" },
    ]);
    const intl = useIntl();

    return (
        <div className={styles.eboard_content_members}>
            <EBoardMember
                description={intl.formatMessage({
                    id: "presidentDescription",
                })}
                imgPath={diya.src}
                name="Diya Shah"
                title="President"
            />
            <Divider cssInjection={styles.eboard_divider} horizontal={false} />
            <EBoardMember
                description={intl.formatMessage({
                    id: "vicePresidentDescription",
                })}
                imgPath={benita.src}
                name="Benita Abraham"
                title="Vice President"
            />
            <Divider cssInjection={styles.eboard_divider} horizontal={false} />
            <EBoardMember
                alignRight
                description={intl.formatMessage({ id: "treasurerDescription" })}
                imgPath={sneha.src}
                name="Sneha Nangelimalil"
                title="Treasurer"
            />
            <Divider cssInjection={styles.eboard_divider} horizontal={false} />
            <EBoardMember
                description={intl.formatMessage({ id: "secretaryDescription" })}
                imgPath={benita.src}
                name="Nicole Kinsella"
                title="Secretary"
            />
            <Divider cssInjection={styles.eboard_divider} horizontal={false} />
            <EBoardMember
                alignRight
                description={intl.formatMessage({
                    id: "socialMediaDescription",
                })}
                imgPath={charmaine.src}
                name="Charmaine Pasicolan"
                title="Social Media"
            />
            <Divider cssInjection={styles.eboard_divider} horizontal={false} />
            <EBoardMember
                alignRight
                description={intl.formatMessage({
                    id: "projectCoordinatorDescription",
                })}
                imgPath={aman.src}
                name="Aman Singh"
                title="Project Outreach Coordinator"
            />
            <Divider cssInjection={styles.eboard_divider} horizontal={false} />
            <EBoardMember
                alignRight
                description={intl.formatMessage({
                    id: "volunteerOutreachChairDescription",
                })}
                imgPath={mwang.src}
                name="Maxwell Wang"
                title="Volunteer Outreach Chair"
            />
        </div>
    );
};
