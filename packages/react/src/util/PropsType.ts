/**
 * PropsType type helper
 */

/** Imports */

import { PropsOf } from "@emotion/styled-base/types/helper";
import { ComponentType } from "react";

/**
 * Extracts the Props type of a React component or of an intrinsic element
 */
export type PropsType<T> = T extends ComponentType<any>
  ? PropsOf<T>
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : never;
