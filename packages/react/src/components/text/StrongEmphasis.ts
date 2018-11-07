/**
 * Strong / StrongEmphasis component
 */

/** Imports */

import defaultProps from "recompose/defaultProps";
import setDisplayName from "recompose/setDisplayName";
import { IdMonad, PropsType, RCT } from "../../util";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface StrongEmphasisProps extends CoreProps, PropsType<"strong"> {}

/**
 * Strong emphasis (`<strong>`)
 */
export const StrongEmphasis = IdMonad.of(Text)
  .map(defaultProps<TextProps>({ as: "strong" }))
  .map(setDisplayName("StrongEmphasis"))
  .flatten() as RCT<StrongEmphasisProps>;

export const Strong = StrongEmphasis;
