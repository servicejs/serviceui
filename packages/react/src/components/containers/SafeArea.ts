/**
 * SafeArea component
 */

/** Imports */

import { augment } from "../../util";
import { Box, BoxProps } from "../base/Box";

/** Declarations */

export interface SafeAreaBaseProps {
  l?: boolean;
  r?: boolean;
  t?: boolean;
  b?: boolean;
  x?: boolean;
  y?: boolean;
  all?: boolean;
}

const safeAreaBasePropsKeys = ["l", "r", "t", "b", "x", "y", "all"];

export interface SafeAreaProps extends BoxProps, SafeAreaBaseProps {}

const selectFirst = <T>(
  match: (value: T) => boolean,
  values: T[],
): T | void => {
  for (const value of values) {
    if (match(value)) {
      return value;
    }
  }
};
const combine = <T>(...values: Array<T | undefined>): T | void =>
  selectFirst((value) => value !== undefined, values);

export const safeAreaMixin = (props: SafeAreaBaseProps) => ({
  paddingLeft: combine(props.l, props.x, props.all)
    ? "env(safe-area-inset-left)"
    : undefined,

  paddingRight: combine(props.r, props.x, props.all)
    ? "env(safe-area-inset-right)"
    : undefined,

  paddingTop: combine(props.t, props.y, props.all)
    ? "env(safe-area-inset-top)"
    : undefined,

  paddingBottom: combine(props.b, props.y, props.all)
    ? "env(safe-area-inset-bottom)"
    : undefined,
});

export const SafeArea = augment<SafeAreaProps, BoxProps>({
  defaultProps: {
    css: safeAreaMixin,
  },
  displayName: "SafeArea",
  omittedProps: safeAreaBasePropsKeys,
})(Box);

export const SafeAreaLeft = augment<SafeAreaProps, SafeAreaProps>({
  defaultProps: {
    l: true,
  },
  displayName: "SafeAreaLeft",
})(SafeArea);
export const SafeAreaRight = augment<SafeAreaProps, SafeAreaProps>({
  defaultProps: {
    r: true,
  },
  displayName: "SafeAreaRight",
})(SafeArea);
export const SafeAreaTop = augment<SafeAreaProps, SafeAreaProps>({
  defaultProps: {
    t: true,
  },
  displayName: "SafeAreaTop",
})(SafeArea);
export const SafeAreaBottom = augment<SafeAreaProps, SafeAreaProps>({
  defaultProps: {
    b: true,
  },
  displayName: "SafeAreaBottom",
})(SafeArea);

export const SafeAreaX = augment<SafeAreaProps, SafeAreaProps>({
  defaultProps: {
    x: true,
  },
  displayName: "SafeAreaX",
})(SafeArea);
export const SafeAreaY = augment<SafeAreaProps, SafeAreaProps>({
  defaultProps: {
    y: true,
  },
  displayName: "SafeAreaY",
})(SafeArea);

export const SafeAreaAll = augment<SafeAreaProps, SafeAreaProps>({
  defaultProps: {
    all: true,
  },
  displayName: "SafeAreaAll",
})(SafeArea);
