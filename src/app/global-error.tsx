/* eslint-disable unicorn/filename-case -- disabled */
"use client";

import React from "react";

type GlobalErrorProperties = {
    /**
     * The error that occurred in the front-end
     */
    readonly error: Error;
    /**
     * Attempts to re-render the component that failed
     *
     * @returns nothing, mutation function
     */
    readonly reset: () => void;
};

/**
 *
 * @param param0
 * @returns
 */
const GlobalError = ({
    error,
    reset: _reset,
}: GlobalErrorProperties): JSX.Element => {
    React.useEffect(() => {
        // eslint-disable-next-line no-console -- disabled
        console.error(error);
    }, [error]);

    return <div>{"Something went wrong"}</div>;
};

export default GlobalError;
