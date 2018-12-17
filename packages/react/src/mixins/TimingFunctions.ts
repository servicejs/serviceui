/**
 * CSS timing functions
 */
const TimingFunctions = {
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  // tslint:disable-next-line:object-literal-sort-keys
  easeInOut: "ease-in-out",
  cubicBezier: (fourNumbers: [number, number, number, number]) =>
    `cubic-bezier(${fourNumbers.map((n) => n.toString()).join(", ")})`,
  stepStart: "step-start",
  stepEnd: "step-end",
  stepsStartN: (n: number) => `steps(${n}, start)`,
  stepsEndN: (n: number) => `steps(${n}, end)`,
  frames: (n: number) => `frames(${n})`,
};

export default TimingFunctions;
