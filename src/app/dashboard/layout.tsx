/* eslint-disable new-cap -- disabled */
import "../globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import { Navbar } from "@/common/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

type DashboardLayoutProperties = React.PropsWithChildren;

/**
 *
 * @param param0
 * @returns
 */
const DashboardLayout = ({
    children,
}: DashboardLayoutProperties): JSX.Element => (
    <html lang="en">
        <body className={inter.className}>
            <Navbar />
            {children}
        </body>
    </html>
);

export const metadata: Metadata = {
    description: "Created by Maxwell Wang + Cameron Thacker",
    title: "CS+SG Website Dashboard",
};

export default DashboardLayout;
