"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { NavbarPaths } from "@/common/constants/enums";
import { CssgFormatMessage } from "@/lib/react-intl";

import { Divider } from "../Divider";
import styles from "./Navbar.module.css";

type NavbarProperties = {
    readonly cssOverride?: string;
};

/**
 * The common navigation bar component, controls all the base navigation at the top of the page
 *
 * @param props - The properties of the Navbar component, comes with an override that allows for custom styles to be applied to the Navbar
 * @returns The customized Navbar, which displays links to all pages available
 */
export const Navbar = ({ cssOverride }: NavbarProperties): JSX.Element => {
    const path = usePathname();

    return (
        <div className={`${styles.navbar_container} ${cssOverride}`}>
            <Link
                className={path === NavbarPaths.HOME ? styles.active_link : ""}
                href={`${NavbarPaths.HOME}`}
            >
                <CssgFormatMessage id="home" />
            </Link>
            <Divider />
            <Link
                className={path === NavbarPaths.ABOUT ? styles.active_link : ""}
                href={`${NavbarPaths.HOME}${NavbarPaths.ABOUT}`}
            >
                <CssgFormatMessage id="about" />
            </Link>
            <Divider />
            <Link
                className={
                    path === NavbarPaths.EVENTS ? styles.active_link : ""
                }
                href={`${NavbarPaths.HOME}${NavbarPaths.EVENTS}`}
            >
                <CssgFormatMessage id="events" />
            </Link>
            <Divider />
            <Link
                className={
                    path === NavbarPaths.EBOARD ? styles.active_link : ""
                }
                href={`${NavbarPaths.HOME}${NavbarPaths.EBOARD}`}
            >
                <CssgFormatMessage id="eboard" />
            </Link>
            <Divider />
            <Link
                className={path === NavbarPaths.FAQ ? styles.active_link : ""}
                href={`${NavbarPaths.HOME}${NavbarPaths.FAQ}`}
            >
                <CssgFormatMessage id="faq" />
            </Link>
        </div>
    );
};
