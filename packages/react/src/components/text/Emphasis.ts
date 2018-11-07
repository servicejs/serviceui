/**
 * Emphasis component
 */

/** Imports */

import defaultProps from "recompose/defaultProps";
import setDisplayName from "recompose/setDisplayName";
import { IdMonad, PropsType, RCT } from "../../util";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface EmphasisProps extends CoreProps, PropsType<"em"> {}

/**
 * Emphasis (`<em>`)
 */
export const Emphasis = IdMonad.of(Text)
  .map(defaultProps<TextProps>({ as: "em" }))
  .map(setDisplayName("Emphasis"))
  .flatten() as RCT<EmphasisProps>;

export const Em = Emphasis;
