/**
 * SafeArea component
 */

/** Imports */

import defaultProps from "recompose/defaultProps";
import mapProps from "recompose/mapProps";
import setDisplayName from "recompose/setDisplayName";
import { IdMonad, RCT } from "../../util";
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

export const SafeArea = IdMonad.of(Box)
  .map(
    mapProps<BoxProps, SafeAreaProps>(
      ({ l, r, t, b, x, y, all, css, ...props }) => ({
        css: [css, safeAreaMixin({ l, r, t, b, x, y, all })],
        ...props,
      }),
    ),
  )
  .map(setDisplayName("SafeArea"))
  .flatten() as RCT<SafeAreaProps>;

export const SafeAreaLeft = IdMonad.of(SafeArea)
  .map(defaultProps<SafeAreaProps & BoxProps>({ l: true }))
  .map(setDisplayName("SafeAreaLeft"))
  .flatten() as RCT<SafeAreaProps>;
export const SafeAreaRight = IdMonad.of(SafeArea)
  .map(defaultProps<SafeAreaProps & BoxProps>({ r: true }))
  .map(setDisplayName("SafeAreaRight"))
  .flatten() as RCT<SafeAreaProps>;
export const SafeAreaTop = IdMonad.of(SafeArea)
  .map(defaultProps<SafeAreaProps & BoxProps>({ t: true }))
  .map(setDisplayName("SafeAreaTop"))
  .flatten() as RCT<SafeAreaProps>;
export const SafeAreaBottom = IdMonad.of(SafeArea)
  .map(defaultProps<SafeAreaProps & BoxProps>({ b: true }))
  .map(setDisplayName("SafeAreaBottom"))
  .flatten() as RCT<SafeAreaProps>;
export const SafeAreaX = IdMonad.of(SafeArea)
  .map(defaultProps<SafeAreaProps & BoxProps>({ x: true }))
  .map(setDisplayName("SafeAreaX"))
  .flatten() as RCT<SafeAreaProps>;
export const SafeAreaY = IdMonad.of(SafeArea)
  .map(defaultProps<SafeAreaProps & BoxProps>({ y: true }))
  .map(setDisplayName("SafeAreaY"))
  .flatten() as RCT<SafeAreaProps>;
export const SafeAreaAll = IdMonad.of(SafeArea)
  .map(defaultProps<SafeAreaProps & BoxProps>({ all: true }))
  .map(setDisplayName("SafeAreaAll"))
  .flatten() as RCT<SafeAreaProps>;
