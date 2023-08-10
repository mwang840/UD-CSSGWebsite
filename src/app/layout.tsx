/* eslint-disable @next/next/no-page-custom-font -- disabled, warning me for adding it to _document.js, when it's layout.tsx */
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
            <link href="https://fonts.googleapis.com" rel="preconnect" />
            <link
                crossOrigin=""
                href="https://fonts.gstatic.com"
                rel="preconnect"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@500&family=Golos+Text&family=Oswald:wght@300&family=Radio+Canada&family=Zeyada&display=swap"
                rel="stylesheet"
            />
        </head>
        <body
            className={`${inter.className} ${styles.layout_body}`}
            id="landing_layout"
        >
            {children}
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
