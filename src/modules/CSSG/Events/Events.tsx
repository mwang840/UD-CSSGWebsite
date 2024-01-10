import React from "react";

import styles from "./Event.module.css";
import { EventContent } from "./EventContent/EventContent";

/**
 *
 * @returns
 */
const Events = (): JSX.Element => (
    <div className={styles.Event_container}>
        <EventContent />
    </div>
);

export default Events;
