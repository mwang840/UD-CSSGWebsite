import React from "react";

import { processColorRange } from "@/common";

// eslint-disable-next-line no-unused-vars, no-shadow -- disabled
enum BGDirection {
    // eslint-disable-next-line no-unused-vars -- disabled
    LEFT = 0,
    // eslint-disable-next-line no-unused-vars -- disabled
    RIGHT = 1,
    // eslint-disable-next-line no-unused-vars -- disabled
    RANDOM = 2,
}

type BGColor = {
    red: number;
    blue: number;
    green: number;
    opacity: number;
};

type BGAnimation = {
    colors?: BGColor[];
    colorCount?: number;
    cssQuerySelector: string;
    direction?: BGDirection;
    intervalTime?: number;
    randomizeColors?: boolean;
};

type BGAnimations = BGAnimation[];

/**
 *
 * @param animations
 */
const useBackgroundColorAnimation = (animations: BGAnimations): void => {
    // eslint-disable-next-line no-undef -- disabled, built-in
    const [intervalIds, setIntervalIds] = React.useState<NodeJS.Timer[]>();

    const intervalFunction = React.useCallback((animation: BGAnimation) => {
        if (animation.randomizeColors ?? true) {
            const seedRed = Math.floor(Math.random() * 255);
            const seedBlue = Math.floor(Math.random() * 255);
            const seedGreen = Math.floor(Math.random() * 255);
            const foundElement = document.querySelector(
                animation.cssQuerySelector,
            );
            if (foundElement !== null) {
                const convertedElement = foundElement as HTMLElement;
                convertedElement.style.backgroundColor = `rgba(${seedRed}, ${seedGreen}, ${seedBlue}, 0.75)`;
            }
        } else if (
            animation.colors !== undefined &&
            animation.colors.length > 0
        ) {
            const foundElement = document.querySelector(
                animation.cssQuerySelector,
            );

            if (foundElement !== null) {
                const convertedElement = foundElement as HTMLElement;
                const colorArray = processColorRange(
                    animation.colors,
                    animation.direction ?? BGDirection.RANDOM,
                );
                for (const eachColor of colorArray) {
                    convertedElement.style.backgroundColor = `rgba(${eachColor.red}, ${eachColor.green}, ${eachColor.blue}, ${eachColor.opacity})`;
                }
            }
        }
    }, []);

    const processAnimations = React.useMemo(
        () => () => {
            if (document !== undefined) {
                for (const eachAnimation of animations) {
                    const foundElement = document.querySelector(
                        eachAnimation.cssQuerySelector,
                    );

                    if (foundElement !== null) {
                        const convertedElement = foundElement as HTMLElement;
                        convertedElement.style.transition =
                            "background-color 1s ease-in-out";
                        const intervalId = setInterval(
                            intervalFunction,
                            eachAnimation.intervalTime ?? 2500,
                            eachAnimation,
                        );
                        setIntervalIds((oldIds) => {
                            if (oldIds === undefined) {
                                return [intervalId];
                            }
                            return [...oldIds, intervalId];
                        });
                    }
                }
            }
        },
        [animations, intervalFunction],
    );

    React.useEffect(() => {
        processAnimations();

        return () => {
            setIntervalIds((oldIntervalIds) => {
                if (oldIntervalIds !== undefined) {
                    for (const eachOldIntervalId of oldIntervalIds) {
                        clearInterval(eachOldIntervalId);
                    }
                }
                return [];
            });
        };
    }, [processAnimations]);
};

export { type BGColor, BGDirection, useBackgroundColorAnimation };
