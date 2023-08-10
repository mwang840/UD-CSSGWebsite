import { type BGColor, BGDirection } from "@/hooks";

/**
 *
 * @param colors
 * @param direction
 */
export const processColorRange = (
    colors: BGColor[],
    direction: BGDirection,
): BGColor[] => {
    if (direction === BGDirection.LEFT) {
        return colors.reverse();
    } else if (direction === BGDirection.RIGHT) {
        return colors;
    }
    const randomizedColors = [];
    const indexesSelected = new Set<number>();
    while (indexesSelected.size < colors.length) {
        const randomIndex = Math.floor(Math.random() * colors.length);
        if (!indexesSelected.has(randomIndex)) {
            randomizedColors.push(colors[randomIndex]);
            indexesSelected.add(randomIndex);
        }
    }
    return randomizedColors;
};
