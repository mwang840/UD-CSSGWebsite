/* eslint-disable new-cap -- disabled */
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

/**
 *
 * @param param0
 * @returns
 */
const RootLayout = ({ children }: React.PropsWithChildren): JSX.Element => (
    <html lang="en">
        <body
            className={`${inter.className} ${styles.layout_body}`}
            id="landing_layout"
        >
            {children}
        </body>
    </html>
);

export const metadata: Metadata = {
    description: "Created by Maxwell Wang + Cameron Thacker",
    title: "CS+SG Website",
};

export default RootLayout;
