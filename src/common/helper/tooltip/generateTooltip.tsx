import React, { type ReactNode } from "react";
import { Tooltip } from "react-bootstrap";
import type { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

/**
 * Generates a tooltip for the OverlayTrigger,
 * with the properties passed in, such as the body, and the id,
 * along with the injected props supplied by the
 * OverlayTrigger component itself.
 *
 * @param properties - The properties injected from the OverlayTrigger component
 * @param body - The body of the tooltip, string or ReactNode
 * @returns - The generated tooltip with the OverlayTrigger properties injected in
 */
export const generateTooltip = (
    properties: OverlayInjectedProps,
    body: string | ReactNode,
): JSX.Element => <Tooltip {...properties}>{body}</Tooltip>;
