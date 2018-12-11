export type ArrayOrElement<T> = T | T[];

export const arrayOrElementToArray = <T>(value: ArrayOrElement<T>): T[] =>
  Array.isArray(value) ? value : [value];
