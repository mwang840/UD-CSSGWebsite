/* eslint-disable new-cap -- disabled */
import "./globals.css";

import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import React from "react";

import { CSSGIntlProvider } from "@/lib/react-intl/CssgIntlProvider";

import styles from "./layout.module.css";

const quicksand = Quicksand({ subsets: ["latin"] });

/**
 *
 * @param param0
 * @returns
 */
const RootLayout = ({ children }: React.PropsWithChildren): JSX.Element => (
    <html lang="en">
        <head>
            <link
                crossOrigin="anonymous"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                rel="stylesheet"
            />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                rel="stylesheet"
            />
        </head>
        <body
            className={`${quicksand.className} ${styles.layout_body}`}
            id="landing_layout"
        >
            <CSSGIntlProvider>{children}</CSSGIntlProvider>
        </body>
    </html>
);

export const metadata: Metadata = {
    applicationName: "CS+SG Website",
    authors: [
        { name: "Maxwell Wang", url: "https://github.com/mwang840" },
        { name: "Cameron Thacker", url: "https://github.com/cthacker-udel" },
    ],
    creator: "Cameron Thacker",
    description: "Created by Maxwell Wang + Cameron Thacker",
    publisher: "Vercel",
    title: "CS+SG Website",
};

export default RootLayout;
