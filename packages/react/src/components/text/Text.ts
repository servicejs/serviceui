/**
 * Text component
 */

/** Imports */

import setDisplayName from "recompose/setDisplayName";
import { asComponent, IdMonad, PropsType, RCT, withStyle } from "../../util";
import { Box, CoreProps } from "../base/Box";

/** Declarations */

export interface TextProps extends CoreProps, PropsType<"span"> {}

/**
 * Text (`<span>`)
 */
export const Text = IdMonad.of(Box)
  .map(asComponent("span"))
  .map(withStyle({ display: "inline" }))
  .map(setDisplayName("Text"))
  .flatten() as RCT<TextProps>;
