/**
 * Generates a stringified version of a generated color
 *
 * @returns The stringified Rgb color
 */
export const generateStringifiedRgbColor = (): string => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
};
