import React from "react";
import styles from "./About.module.css";
export function About() {
  return (
    <div>
      <h1 className={styles.title}>About the club</h1>
      <p>
        The University of Delaware Computer Science + Social Good club is a
        computer science oriented club where computer science students set out
        to do things for the social good. Currently the club has worked on
        making an app for the udance team, making a website for off campus
        housing and much more!
      </p>
    </div>
  );
}
