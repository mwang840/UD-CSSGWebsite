import React from "react";
import { Popover } from "react-bootstrap";
import type { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

/**
 * Generates a popover for a OverlayTrigger component with the specified title within it
 *
 * @param properties - The injected properties from the OverlayTrigger component
 * @param title - The title of the popover displayed to the user
 * @returns The generated popover with the OverlayTrigger properties added in
 */
export const generatePopover = (
    properties: OverlayInjectedProps,
    title: string,
): JSX.Element => (
    <Popover {...properties}>
        <Popover.Body>{title}</Popover.Body>
    </Popover>
);
