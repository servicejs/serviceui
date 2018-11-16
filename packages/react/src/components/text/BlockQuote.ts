/**
 * BlockQuote component
 */

/** Imports */

import { augment } from "../../util/augment";
import { EmotionPropsType } from "../../util/PropsType";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface BlockQuoteProps
  extends CoreProps,
    EmotionPropsType<"blockquote"> {}

/**
 * BlockQuote (`<blockquote>`)
 */
export const BlockQuote = augment<BlockQuoteProps, TextProps>({
  defaultProps: { as: "blockquote" },
  displayName: "BlockQuote",
})(Text);
