"use client";
import React from "react";

import styles from "./CSSG.module.css";
import { useBackgroundImageInjector } from "@/hooks/image";
import cssgBackground from "@/assets/bg/cssg_background_img.avif";

/**
 *
 * @returns
 */
const CSSG = (): JSX.Element => {
    useBackgroundImageInjector(cssgBackground.src);

    return <div>{"Hello"}</div>;
};

export default CSSG;
