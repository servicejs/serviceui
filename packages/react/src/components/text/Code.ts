/**
 * Code component
 */

/** Imports */

import { augment } from "../../util/augment";
import { EmotionPropsType } from "../../util/PropsType";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface CodeProps extends CoreProps, EmotionPropsType<"code"> {}

/**
 * Code (`<code>`)
 */
export const Code = augment<CodeProps, TextProps>({
  defaultProps: { as: "code" },
  displayName: "Code",
})(Text);
