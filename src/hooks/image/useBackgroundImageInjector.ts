import React from "react";

/**
 * Adds an image to the `body` element, must pass in the src preemptively
 *
 * @param imageSource - The src of the image to inject into the `body` element
 */
export const useBackgroundImageInjector = (imageSource: string): void => {
    React.useEffect(() => {
        if (document !== undefined) {
            const body = document.querySelector("body");
            if (body !== null) {
                const convertedElement = body as HTMLElement;
                convertedElement.style.background = `url('${imageSource}')`;
            }
        }
    }, [imageSource]);
};
