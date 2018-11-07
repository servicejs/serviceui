/**
 * Inline quote component
 */

/** Imports */

import defaultProps from "recompose/defaultProps";
import setDisplayName from "recompose/setDisplayName";
import { IdMonad, PropsType, RCT } from "../../util";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface InlineQuoteProps extends CoreProps, PropsType<"q"> {}

/**
 * Inline quote (`<q>`)
 */
export const InlineQuote = IdMonad.of(Text)
  .map(defaultProps<TextProps>({ as: "q" }))
  .map(setDisplayName("InlineQuote"))
  .flatten() as RCT<InlineQuoteProps>;

export const Quote = InlineQuote;
export const Q = InlineQuote;
