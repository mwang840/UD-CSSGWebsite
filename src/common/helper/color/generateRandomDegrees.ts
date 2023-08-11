/**
 * Generates a random degree from -360 to 360 degrees
 *
 * @returns The random degree found
 */
export const generateRandomDegrees = (): number => {
    const isNegative = Math.floor(Math.random() * 2);
    const degreeAmount = Math.floor(Math.random() * 360);
    return isNegative === 1 ? -degreeAmount : degreeAmount;
};
