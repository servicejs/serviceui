/**
 * CSS timing functions
 */

// tslint:disable-next-line:no-namespace
namespace TimingFunctions {
  export const ease = "ease";
  export const easeIn = "ease-in";
  export const easeOut = "ease-out";
  // tslint:disable-next-line:object-literal-sort-keys
  export const easeInOut = "ease-in-out";
  export const cubicBezier = (fourNumbers: [number, number, number, number]) =>
    `cubic-bezier(${fourNumbers.map((n) => n.toString()).join(", ")})`;
  export const stepStart = "step-start";
  export const stepEnd = "step-end";
  export const stepsStartN = (n: number) => `steps(${n}, start)`;
  export const stepsEndN = (n: number) => `steps(${n}, end)`;
  export const frames = (n: number) => `frames(${n})`;
}

export default TimingFunctions;
