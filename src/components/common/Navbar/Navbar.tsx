import React from "react";
import "./Navbar.css";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/events">Events</Link>
      <Link href="/eboard">Eboard</Link>
      <Link href="/FAQ">FAQ</Link>
    </div>
  );
};
