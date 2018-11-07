/**
 * BlockQuote component
 */

/** Imports */

import defaultProps from "recompose/defaultProps";
import setDisplayName from "recompose/setDisplayName";
import { IdMonad, PropsType, RCT, withStyle } from "../../util";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface BlockQuoteProps extends CoreProps, PropsType<"blockquote"> {}

/**
 * BlockQuote (`<blockquote>`)
 */
export const BlockQuote = IdMonad.of(Text)
  .map(defaultProps<TextProps>({ as: "blockquote" }))
  .map(withStyle({ display: "block" }))
  .map(setDisplayName("BlockQuote"))
  .flatten() as RCT<BlockQuoteProps>;
