/**
 * CSS timing functions
 */

// tslint:disable-next-line:no-namespace
namespace TimingFunction {
  export const enum Static {
    ease = "ease",
    easeIn = "ease-in",
    easeOut = "ease-out",
    easeInOut = "ease-in-out",
    stepStart = "step-start",
    stepEnd = "step-end",
  }

  export namespace Dynamic {
    export const cubicBezier = (fourNumbers: [number, number, number, number]) =>
      `cubic-bezier(${fourNumbers.map((n) => n.toString()).join(", ")})`;
    export const stepsStartN = (n: number) => `steps(${n}, start)`;
    export const stepsEndN = (n: number) => `steps(${n}, end)`;
    export const frames = (n: number) => `frames(${n})`;
  }
}

export default TimingFunction;
