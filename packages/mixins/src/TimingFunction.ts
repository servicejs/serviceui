/**
 * CSS timing functions
 */

// tslint:disable-next-line:no-namespace
namespace TimingFunction {
  export const ease = "ease";
  export const easeIn = "ease-in";
  export const easeOut = "ease-out";
  export const easeInOut = "ease-in-out";
  export const stepStart = "step-start";
  export const stepEnd = "step-end";

  export const cubicBezier = (fourNumbers: [number, number, number, number]) =>
    `cubic-bezier(${fourNumbers.map((n) => n.toString()).join(", ")})`;
  export const stepsStartN = (n: number) => `steps(${n}, start)`;
  export const stepsEndN = (n: number) => `steps(${n}, end)`;
  export const frames = (n: number) => `frames(${n})`;
}

export default TimingFunction;
