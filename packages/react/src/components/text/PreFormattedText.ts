/**
 * PreFormattedText component
 */

/** Imports */

import defaultProps from "recompose/defaultProps";
import setDisplayName from "recompose/setDisplayName";
import { IdMonad, PropsType, RCT } from "../../util";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface PreFormattedTextProps extends CoreProps, PropsType<"pre"> {}

/**
 * PreFormattedText (`<pre>`)
 */
export const PreFormattedText = IdMonad.of(Text)
  .map(defaultProps<TextProps>({ as: "pre" }))
  .map(setDisplayName("PreFormattedText"))
  .flatten() as RCT<PreFormattedTextProps>;

export const Pre = PreFormattedText;
