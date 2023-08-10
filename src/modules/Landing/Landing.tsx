"use client";
import React from "react";
import { Button, OverlayTrigger } from "react-bootstrap";
import type { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

import _cssg from "@/assets/cs+sg.jpg";
import { generatePopover } from "@/common/helper/popover/generatePopover";

import styles from "./Landing.module.css";
import { useBackgroundLinearGradientAnimation } from "@/hooks/color";

/**
 *
 * @returns
 */
const Landing = (): JSX.Element => {
    useBackgroundLinearGradientAnimation();
    return (
        <div className={styles.landing_container}>
            <div className={styles.landing_header}>
                {"Welcome to UD CS + Social Good!"}
            </div>
            <div className={styles.options_bar}>
                <OverlayTrigger
                    overlay={(properties: OverlayInjectedProps): JSX.Element =>
                        generatePopover(properties, "Login")
                    }
                    placement="bottom"
                >
                    <Button
                        className={styles.landing_page_button}
                        variant="outline-primary"
                    >
                        <i className="fa-solid fa-door-open" />
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={(properties: OverlayInjectedProps): JSX.Element =>
                        generatePopover(properties, "Sign Up")
                    }
                    placement="bottom"
                >
                    <Button
                        className={styles.landing_page_button}
                        variant="outline-secondary"
                    >
                        <i className="fa-solid fa-user-plus" />
                    </Button>
                </OverlayTrigger>
            </div>
        </div>
    );
};

export default Landing;
