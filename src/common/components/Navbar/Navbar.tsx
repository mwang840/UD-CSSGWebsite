"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { NavbarPaths } from "@/common/constants/enums";

import { Divider } from "../Divider";
import styles from "./Navbar.module.css";

type NavbarProperties = {
    readonly cssOverride?: string;
};

/**
 *
 * @param param0
 * @returns
 */
export const Navbar = ({ cssOverride }: NavbarProperties): JSX.Element => {
    const path = usePathname();

    return (
        <div className={`${styles.navbar_container} ${cssOverride}`}>
            <Link
                className={path === NavbarPaths.HOME ? styles.active_link : ""}
                href={NavbarPaths.HOME}
            >
                {"Home"}
            </Link>
            <Divider />
            <Link
                className={path === NavbarPaths.ABOUT ? styles.active_link : ""}
                href={NavbarPaths.ABOUT}
            >
                {"About"}
            </Link>
            <Divider />
            <Link
                className={
                    path === NavbarPaths.EVENTS ? styles.active_link : ""
                }
                href={NavbarPaths.EVENTS}
            >
                {"Events"}
            </Link>
            <Divider />
            <Link
                className={
                    path === NavbarPaths.EBOARD ? styles.active_link : ""
                }
                href={NavbarPaths.EBOARD}
            >
                {"Eboard"}
            </Link>
            <Divider />
            <Link
                className={path === NavbarPaths.FAQ ? styles.active_link : ""}
                href={NavbarPaths.FAQ}
            >
                {"FAQ"}
            </Link>
        </div>
    );
};
