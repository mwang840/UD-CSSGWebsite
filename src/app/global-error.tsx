"use client";

import React from "react";

type GlobalErrorProperties = {
  /**
   * The error that occurred in the front-end
   */
  error: Error;
  /**
   * Attempts to re-render the component that failed
   *
   * @returns nothing, mutation function
   */
  reset: () => void;
};

const GlobalError = ({ error, reset }: GlobalErrorProperties): JSX.Element => {
  React.useEffect(() => {
    console.log(error);
  }, [error]);

  return <div>{"Something went wrong"}</div>;
};

export default GlobalError;
