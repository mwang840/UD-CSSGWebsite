import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavLink
        to="/home"
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "20px",
          fontFamily: "Georgia",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "20px",
          fontFamily: "Georgia",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/events"
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "20px",
          fontFamily: "Georgia",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        Events
      </NavLink>
      <NavLink
        to="/eboard"
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "20px",
          fontFamily: "Georgia",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        Eboard
      </NavLink>
      <NavLink
        to="/FAQ"
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "20px",
          fontFamily: "Georgia",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        FAQ
      </NavLink>
    </div>
  );
};
