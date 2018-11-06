/**
 * ArgumentTuple type
 */

// tslint:disable-next-line:ban-types
export type ArgumentTuple<F extends Function> = F extends (
  ...args: infer A
) => infer R
  ? A
  : never;
