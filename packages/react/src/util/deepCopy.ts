/**
 * deepCopy
 */

/** Imports */

import { ArgumentTuple } from "./ArgumentTuple";

/** Declarations */

/**
 * Deep copies a value
 */
export const deepCopy = <T>(value: T): T => {
  switch (typeof value) {
    case "string":
      return value;
    case "symbol":
      return value;
    case "number":
      return value;
    case "boolean":
      return value;
    case "undefined":
      return value;
    case "object":
      if (value === null) {
        return value;
      }
      if (Array.isArray(value)) {
        return (Array(...value.map(deepCopy)) as any) as T;
      }
      const o: any = {};
      // tslint:disable-next-line:forin
      for (const key in value) {
        o[key] = deepCopy(value);
      }
      return o;
    case "function":
      return (((...args: any[]) => (value as any)(...args)) as any) as T;
    default:
      return value;
  }
};
