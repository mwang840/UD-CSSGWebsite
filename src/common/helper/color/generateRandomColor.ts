/**
 * Generates a random color (RGB) from the range [0, 255)
 *
 * @returns - A random color from the range (0, 255)
 */
export const generateRandomColor = (): number =>
    Math.floor(Math.random() * 255);
