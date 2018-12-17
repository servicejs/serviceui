/**
 * Zero or one or many values & helpers
 */

export type Zero = [];
export type One<T> = T | [T];
export type Many<T> = T[];

export type ZeroOrOne<T> = Zero | One<T>;
export type OneOrMore<T> = One<T> | Many<T>;
export type ZeroOrMany<T> = Zero | Many<T>;
export type ZeroOrOneOrMany<T> = Zero | One<T> | Many<T>;

export function zeroOrManytoArray<T>(value?: ZeroOrOneOrMany<T>): T[] {
  return value ? (Array.isArray(value) ? [...value] : [value]) : [];
}

export default zeroOrManytoArray;
