/* eslint-disable @typescript-eslint/indent -- disabled */

import { BgDirection } from "@/common/constants/enums";

/**
 * Generates a color range dependent on the color supplied, the number of colors to generate, and the direction upon which we are generating the color array
 *
 * @param color - The color we are starting with
 * @param colorCount - The number of colors to return from the function
 * @param direction - The direction we are taking the colors (left - decreasing) (right - increasing) (random - decreasing/increasing)
 * @returns The range of colors specified by the arguments supplied to this function
 */
export const generateColorRange = (
    color: number,
    colorCount: number,
    direction: BgDirection,
): number[] => {
    const colors = [color];
    let colorValue = color;
    while (colors.length < colorCount) {
        if (colorValue === 0 && direction === BgDirection.LEFT) {
            colorValue = 255;
        } else if (colorValue === 255 && direction === BgDirection.RIGHT) {
            colorValue = 0;
        } else {
            const randomValue = Math.floor(Math.random() * 2);

            if (randomValue === 1 && colorValue === 0) {
                colorValue = 255;
            } else {
                const changingColorValue =
                    direction === BgDirection.LEFT
                        ? 1
                        : direction === BgDirection.RIGHT
                        ? -1
                        : Math.floor(Math.random() * 2);
                colorValue -= changingColorValue;
            }
        }
        colors.push(colorValue);
    }
    colors.sort((element1, element2) => element1 - element2);
    return colors;
};
