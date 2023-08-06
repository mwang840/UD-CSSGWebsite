"use client";
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarProperties = {
  currentLink: string;
};

enum NavbarPaths {
  ABOUT = "/about",
  EVENTS = "/events",
  EBOARD = "/eboard",
  FAQ = "/faq",
  HOME = "/home",
}

export const Navbar = () => {
  const path = usePathname();

  return (
    <div className={styles.navbar_container}>
      <Link
        className={path === NavbarPaths.HOME ? styles.active_link : ""}
        href="/home"
      >
        {"Home"}
      </Link>
      <Link
        className={path === NavbarPaths.ABOUT ? styles.active_link : ""}
        href="/about"
      >
        {"About"}
      </Link>
      <Link
        className={path === NavbarPaths.EVENTS ? styles.active_link : ""}
        href="/events"
      >
        {"Events"}
      </Link>
      <Link
        className={path === NavbarPaths.EBOARD ? styles.active_link : ""}
        href="/eboard"
      >
        {"Eboard"}
      </Link>
      <Link
        className={path === NavbarPaths.FAQ ? styles.active_link : ""}
        href="/FAQ"
      >
        {"FAQ"}
      </Link>
    </div>
  );
};
