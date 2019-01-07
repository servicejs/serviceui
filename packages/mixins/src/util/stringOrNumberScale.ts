const stringOrNumberScale = (scale: (value: number) => string = (x) => `${x}px`) => (value: string | number) =>
  typeof value === "number" ? scale(value) : value;

export default stringOrNumberScale;
