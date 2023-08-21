"use client";
import React from "react";
import { useIntl } from "react-intl";

import benita from "@/assets/imgs/jpg/benita.jpg";
import brendan from "@/assets/imgs/jpg/brendangreen.jpg";
import diya from "@/assets/imgs/jpg/diya.jpg";
import donovan from "@/assets/imgs/jpg/donovanmesser.jpg";
import matt from "@/assets/imgs/jpg/mattweis.jpg";
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
                    id: "coPresidentOneDescription",
                })}
                imgPath={diya.src}
                name="Diya Shah"
                title="Co-President"
            />
            <Divider cssInjection={styles.eboard_divider} horizontal={false} />
            <EBoardMember
                alignRight
                description={intl.formatMessage({
                    id: "coPresidentTwoDescription",
                })}
                imgPath={brendan.src}
                name="Brendan Green"
                title="Co-President"
            />
            <Divider cssInjection={styles.eboard_divider} horizontal={false} />
            <EBoardMember
                description={intl.formatMessage({
                    id: "vicePresidentDescription",
                })}
                imgPath={donovan.src}
                name="Donovan Messer"
                title="Vice President"
            />
            <Divider cssInjection={styles.eboard_divider} horizontal={false} />
            <EBoardMember
                alignRight
                description={intl.formatMessage({ id: "treasurerDescription" })}
                imgPath={matt.src}
                name="Matt Weis"
                title="Treasurer"
            />
            <Divider cssInjection={styles.eboard_divider} horizontal={false} />
            <EBoardMember
                description={intl.formatMessage({ id: "secretaryDescription" })}
                imgPath={benita.src}
                name="Benita Abraham"
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
                description={intl.formatMessage({
                    id: "volunteerOutreachChairOneDescription",
                })}
                imgPath={sneha.src}
                name="Sneha Nangelimalil"
                title="Volunteer Outreach Chair"
            />
            <Divider cssInjection={styles.eboard_divider} horizontal={false} />
            <EBoardMember
                alignRight
                description={intl.formatMessage({
                    id: "volunteerOutreachChairTwoDescription",
                })}
                imgPath={mwang.src}
                name="Maxwell Wang"
                title="Volunteer Outreach Chair"
            />
        </div>
    );
};
