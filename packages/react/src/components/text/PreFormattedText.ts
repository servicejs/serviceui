/**
 * Pre / PreFormattedText component
 */

/** Imports */

import { augment } from "../../util/augment";
import { EmotionPropsType } from "../../util/PropsType";
import { wrap } from "../../util/wrap";
import { CoreProps } from "../base";
import { HorizontalOverflowScrollContainer } from "../containers";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface PreFormattedTextProps
  extends CoreProps,
    EmotionPropsType<"pre"> {}

/**
 * PreFormattedText (`<pre>`)
 */
export const PreFormattedText = augment<PreFormattedTextProps, TextProps>({
  defaultProps: { as: "pre", css: { display: "block" } },
  displayName: "PreFormattedText",
})(wrap(HorizontalOverflowScrollContainer)(Text));

export const Pre = PreFormattedText;
