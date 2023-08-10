import React from "react";

type Query = {
    className: string;
    classNames?: string[];
    cssQuery: string;
};

/**
 * Injects classNames into specified elements specified by the queries, using the `querySelector` method to find the element
 *
 * @param queries - The CSS queries + classNames to apply to the selected elements
 */
export const useClassNameInjection = (queries: Query[]): void => {
    React.useEffect(() => {
        if (document !== undefined) {
            for (const eachQuery of queries) {
                const foundElement = document.querySelector(eachQuery.cssQuery);

                if (foundElement !== null) {
                    const convertedElement = foundElement as HTMLElement;
                    convertedElement.className =
                        `${convertedElement.className} ${eachQuery.className}`.trim();
                    if (eachQuery.classNames !== undefined) {
                        for (const eachInjectedClassName of eachQuery.classNames) {
                            convertedElement.className =
                                `${convertedElement.className} ${eachInjectedClassName}`.trim();
                        }
                    }
                }
            }
        }

        return () => {
            if (document !== undefined) {
                for (const eachQuery of queries) {
                    const foundElement = document.querySelector(
                        eachQuery.cssQuery,
                    );

                    if (foundElement !== null) {
                        const convertedElement = foundElement as HTMLElement;
                        convertedElement.className = convertedElement.className
                            .replace(eachQuery.className, "")
                            .trim();
                        if (eachQuery.classNames !== undefined) {
                            for (const eachInjectedClassName of eachQuery.classNames) {
                                convertedElement.className =
                                    convertedElement.className
                                        .replace(eachInjectedClassName, "")
                                        .trim();
                            }
                        }
                    }
                }
            }
        };
    }, [queries]);
};
