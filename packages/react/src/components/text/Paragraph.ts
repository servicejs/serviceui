/**
 * Paragraph component
 */

/** Imports */

import defaultProps from "recompose/defaultProps";
import setDisplayName from "recompose/setDisplayName";
import { IdMonad, PropsType, RCT, withStyle } from "../../util";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface ParagraphProps extends CoreProps, PropsType<"p"> {}

/**
 * Paragraph (`<p>`)
 */
export const Paragraph = IdMonad.of(Text)
  .map(defaultProps<TextProps>({ as: "p" }))
  .map(withStyle({ display: "block" }))
  .map(setDisplayName("Paragraph"))
  .flatten() as RCT<ParagraphProps>;

export const P = Paragraph;
