/**
 * Aspect ratio helpers
 */

/**
 * A function accepting an aspect ratio argument either as a single or as two numbers
 */
export interface AspectRatioFunction<T> {
  (aspectRatio: number): T;
  // tslint:disable-next-line:unified-signatures
  (numerator: number, denominator: number | undefined): T;
}

/**
 * Accepts a single float or two numbers and returns the aspect ratio as a
 * fraction of two numbers with a precision of 1 / 10000
 */
const aspectRatio = ((value1: number, value2?: number) => {
  if (typeof value2 === "number") {
    if (Number.isInteger(value1) && Number.isInteger(value2)) {
      return `${value1}/${value2}`;
    }
    return aspectRatio(value1 / value2);
  }

  return `${Math.round(value1 * 10000)}/10000`;
}) as AspectRatioFunction<string>;

export default aspectRatio;
