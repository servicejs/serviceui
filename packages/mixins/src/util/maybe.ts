const maybe = <T, U>(f: (value: T) => U) => (value: T | undefined) =>
  typeof value === "undefined" ? undefined : f(value);

export default maybe;
