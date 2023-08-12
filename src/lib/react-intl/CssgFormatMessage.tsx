"use client";
import React from "react";
import { FormattedMessage } from "react-intl";

type CssgFormatMessageProperties = {
    readonly id: string;
};

/**
 * Wrapped around FormattedMessage, since it is a client component.
 * Aiming to isolate the amount of client-side components being rendered vs server-side.
 * To utilize Server-Side components to their maximum potential.
 *
 * @param props - The properties passed into the component
 * @param props.id - The id of the locale message to display
 * @returns The wrapped formatted message component with the passed id
 */
export const CssgFormatMessage = ({
    id,
}: CssgFormatMessageProperties): JSX.Element => <FormattedMessage id={id} />;
