/* eslint-disable no-mixed-operators -- disabled */
/* eslint-disable no-confusing-arrow -- disabled */
/**
 * Generates a random percent from 0 to 100
 *
 * @param greaterThan - The number we want it to be greater than
 * @param lessThan - the number we want it to be less than
 * @returns The generated random percent
 */
export const generateRandomPercent = (
    greaterThan: number | undefined = undefined,
    lessThan: number | undefined = undefined,
): number => {
    if (lessThan !== undefined) {
        return Math.floor(Math.random() * lessThan);
    } else if (greaterThan !== undefined) {
        return Math.floor(Math.random() * (100 - greaterThan) + greaterThan);
    }
    return Math.floor(Math.random() * 101);
};
