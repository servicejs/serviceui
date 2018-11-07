/**
 * omitProps() and related type helpers
 */

/** Imports */

import * as React from "react";
import { arrayWrapper } from "./arrayWrapper";
import { RCT } from "./react-shorthands";

/** Declarations */

/**
 * Omit removes the keys in K from an object type T
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Removes keys from an object
 * @param keys The keys to remove
 */
export const omit: {
  <T, K extends keyof T>(keys: K[]): (props: T) => Omit<T, K>;
  <T, K extends keyof T>(...keys: K[]): (props: T) => Omit<T, K>;
} = arrayWrapper(<T, K extends keyof T>(keys: K[]) => (props: T): Omit<
  T,
  K
> => {
  const o: any = {};
  for (const key of Object.keys(props) as Array<keyof T>) {
    if (keys.indexOf(key as K) === -1) {
      o[key] = props[key];
    }
  }
  return o;
});

/**
 * A higher-order React component that removes keys from props.
 * @param keys The keys to omit
 */
export const omitProps: {
  <P, K extends keyof P>(keys: K[]): (component: RCT<Omit<P, K>>) => RCT<P>;
  <P, K extends keyof P>(...keys: K[]): (component: RCT<Omit<P, K>>) => RCT<P>;
} = arrayWrapper(
  <P, K extends keyof P>(keys: K[]) => (component: RCT<Omit<P, K>>) => (
    props: P,
  ) => React.createElement(component, omit<P, K>(keys)(props)),
);
