import type { BgColor } from "@/@types/color";
import { BgDirection } from "@/common/constants/enums";

/**
 *
 * @param colors
 * @param direction
 */
export const processColorRange = (
    colors: BgColor[],
    direction: BgDirection,
): BgColor[] => {
    if (direction === BgDirection.LEFT) {
        return colors.reverse();
    } else if (direction === BgDirection.RIGHT) {
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
