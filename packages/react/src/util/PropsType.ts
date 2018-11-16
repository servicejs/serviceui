/**
 * PropsType helper type
 */

/** Imports */

import * as React from "react";

/** Declarations */

// prettier-ignore
export type ReactComponentPropsType<T> = T extends React.ComponentType<infer P> ? P : never;
// prettier-ignore
export type IntrinsicComponentPropsType<T> = T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : never;
// prettier-ignore
export type PropsType<T> = T extends React.ComponentType<infer P>
  ? P
  : (
    T extends keyof JSX.IntrinsicElements
      ? JSX.IntrinsicElements[T]
      : never
    );

export type EmotionPropsType<T> = Pick<
  PropsType<T>,
  Exclude<keyof PropsType<T>, "css">
>;
