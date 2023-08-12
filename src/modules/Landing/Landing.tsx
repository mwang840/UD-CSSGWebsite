"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import type { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";
import { useIntl } from "react-intl";

import _cssg from "@/assets/cs+sg.jpg";
import CSSGLogo from "@/assets/cssg1.png";
import { generateTooltip } from "@/common/helper/tooltip";
import { useBackgroundLinearGradientAnimation } from "@/hooks/color";

import styles from "./Landing.module.css";

/**
 * The landing page, where the user first arrives when visiting the website
 *
 * @returns The landing page of the application
 */
const Landing = (): JSX.Element => {
    useBackgroundLinearGradientAnimation();
    const intl = useIntl();

    return (
        <div className={styles.landing_container}>
            <div className={styles.landing_header}>
                <Image
                    alt="CS+SG Club Logo"
                    className={styles.landing_club_logo}
                    height={500}
                    src={CSSGLogo.src}
                    width={500}
                />
                {intl.formatMessage({ id: "welcomeMessage" })}
            </div>
            <div className={styles.options_bar}>
                <OverlayTrigger
                    overlay={(properties: OverlayInjectedProps): JSX.Element =>
                        generateTooltip(
                            properties,
                            intl.formatMessage({ id: "loginTooltip" }),
                        )
                    }
                    placement="bottom"
                >
                    <Link
                        className={`${styles.landing_page_button} ${styles.landing_page_login}`}
                        href="login"
                    >
                        <i className="fa-solid fa-door-open" />
                    </Link>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={(properties: OverlayInjectedProps): JSX.Element =>
                        generateTooltip(
                            properties,
                            intl.formatMessage({ id: "signUpTooltip" }),
                        )
                    }
                    placement="bottom"
                >
                    <Link
                        className={`${styles.landing_page_button} ${styles.landing_page_signup}`}
                        href="signup"
                    >
                        <i className="fa-solid fa-user-plus" />
                    </Link>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={(properties: OverlayInjectedProps): JSX.Element =>
                        generateTooltip(
                            properties,
                            intl.formatMessage({ id: "homePageTooltip" }),
                        )
                    }
                    placement="bottom"
                >
                    <Link
                        className={`${styles.landing_page_button} ${styles.landing_page_to_home_page}`}
                        href="cssg"
                    >
                        <i className="fa-solid fa-arrow-up" />
                    </Link>
                </OverlayTrigger>
            </div>
        </div>
    );
};

export default Landing;
