"use client";
import Image from "next/image";
import React from "react";
import { Button, OverlayTrigger } from "react-bootstrap";
import type { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

import _cssg from "@/assets/cs+sg.jpg";
import CSSGLogo from "@/assets/cssg1.png";
import { useBackgroundLinearGradientAnimation } from "@/hooks/color";

import styles from "./Landing.module.css";
import { generateTooltip } from "@/common/helper/tooltip";

/**
 *
 * @returns
 */
const Landing = (): JSX.Element => {
    useBackgroundLinearGradientAnimation();
    return (
        <div className={styles.landing_container}>
            <div className={styles.landing_header}>
                <Image
                    alt="CS+SG Clug Logo"
                    className={styles.landing_club_logo}
                    height={500}
                    src={CSSGLogo.src}
                    width={500}
                />
                {"Welcome to UD CS + Social Good!"}
            </div>
            <div className={styles.options_bar}>
                <OverlayTrigger
                    overlay={(properties: OverlayInjectedProps): JSX.Element =>
                        generateTooltip(properties, "Login")
                    }
                    placement="bottom"
                >
                    <Button
                        className={styles.landing_page_button}
                        variant="primary"
                    >
                        <i className="fa-solid fa-door-open" />
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={(properties: OverlayInjectedProps): JSX.Element =>
                        generateTooltip(properties, "Sign Up")
                    }
                    placement="bottom"
                >
                    <Button
                        className={styles.landing_page_button}
                        variant="secondary"
                    >
                        <i className="fa-solid fa-user-plus" />
                    </Button>
                </OverlayTrigger>
            </div>
        </div>
    );
};

export default Landing;