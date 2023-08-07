import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CS+SG Website",
  description: "Created by Maxwell Wang + Cameron Thacker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${styles.layout_body}`}
        id="landing_layout"
      >
        {children}
      </body>
    </html>
  );
}
