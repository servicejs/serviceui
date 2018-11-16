/**
 * Q / InlineQuote component
 */

/** Imports */

import { augment } from "../../util/augment";
import { EmotionPropsType } from "../../util/PropsType";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface InlineQuoteProps extends CoreProps, EmotionPropsType<"q"> {}

/**
 * InlineQuote (`<q>`)
 */
export const InlineQuote = augment<InlineQuoteProps, TextProps>({
  defaultProps: { as: "q" },
  displayName: "InlineQuote",
})(Text);

export const Quote = InlineQuote;
export const Q = InlineQuote;
