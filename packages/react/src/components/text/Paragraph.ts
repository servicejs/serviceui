/**
 * P / Paragraph component
 */

/** Imports */

import { augment } from "../../util/augment";
import { EmotionPropsType } from "../../util/PropsType";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface ParagraphProps extends CoreProps, EmotionPropsType<"p"> {}

/**
 * Paragraph (`<p>`)
 */
export const Paragraph = augment<ParagraphProps, TextProps>({
  defaultProps: { as: "p" },
  displayName: "Paragraph",
})(Text);

export const P = Paragraph;
