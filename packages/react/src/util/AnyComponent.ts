/**
 * AnyComponent helper type
 */

/** Imports */

import * as React from "react";

/** Declarations */

/**
 * Any React.ComponentType or IntrinsicElement
 */
export type AnyComponent =
  | keyof JSX.IntrinsicElements
  | React.ComponentType<any>;
