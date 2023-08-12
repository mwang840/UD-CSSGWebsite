import React from "react";

import {
    generateRandomDegrees,
    generateStringifiedRgbColor,
} from "@/common/helper/color";

/**
 *
 */
export const useBackgroundLinearGradientAnimation = (): void => {
    React.useEffect(() => {
        if (document !== undefined) {
            const body = document.querySelector("body");
            if (body !== null) {
                const convertedElement = body as HTMLElement;
                convertedElement.style.transition =
                    "background-position 1s ease-in-out";
                const seedLeft = generateStringifiedRgbColor();
                const seedRight = generateStringifiedRgbColor();
                const seedTop = generateStringifiedRgbColor();
                const seedBottom = generateStringifiedRgbColor();
                const randomDegree = generateRandomDegrees();
                convertedElement.style.background = `linear-gradient(${randomDegree}deg, ${seedLeft}, ${seedRight}, ${seedTop}, ${seedBottom})`;
                convertedElement.style.animation = "gradient 15s ease infinite";
                convertedElement.style.setProperty(
                    "background-size",
                    "400% 400%",
                    "important",
                );
            }
        }

        return () => {
            if (document !== undefined) {
                const body = document.querySelector("body");
                if (body !== null) {
                    body.style.background = "";
                    body.style.animation = "";
                    body.style.backgroundSize = "";
                }
            }
        };
    }, []);
};
