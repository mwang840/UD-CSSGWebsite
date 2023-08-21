import Image from "next/image";
import React from "react";

import styles from "./EBoardMember.module.css";

type EBoardMemberProperties = {
    readonly alignRight?: boolean;
    readonly description?: string;
    readonly imgPath: string;
    readonly name: string;
    readonly title: string;
};

/**
 * Displays an individual EBoard member
 *
 * @param props - The properties of the individual EBoard member component
 * @param props.alignLeft - (defaults to true) Whether to align the member description to the right
 * @param props.description - (defaults to N/A) The description of the individual
 * @param props.imgPath - The path of the profile image that shows the individual member
 * @param props.name - The name of the individual within the organization
 * @param props.title - The title the individual holds within the organization
 * @returns
 */
export const EBoardMember = ({
    alignRight = false,
    description = "N/A",
    imgPath,
    name,
    title,
}: EBoardMemberProperties): JSX.Element => (
    <div
        className={`${styles.member_container} ${
            alignRight && styles.member_align_right
        }`}
    >
        <div className={styles.member_visual_info}>
            <Image
                alt={`The ${title}'s picture`}
                className={styles.eboard_member_photo}
                height={200}
                src={imgPath}
                width={200}
            />
            <div className={styles.member_name}>{name}</div>
            <div className={styles.member_title}>{title}</div>
        </div>
        <div className={styles.member_description}>{description}</div>
    </div>
);
