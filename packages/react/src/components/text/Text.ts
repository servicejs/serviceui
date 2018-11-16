/**
 * Text component
 */

/** Imports */

import { augment } from "../../util/augment";
import { EmotionPropsType } from "../../util/PropsType";
import { Box, BoxProps, CoreProps } from "../base";

/** Declarations */

export interface TextProps extends CoreProps, EmotionPropsType<"span"> {}

/**
 * Text (`<span>`)
 */
export const Text = augment<TextProps, BoxProps>({
  defaultProps: { as: "span" },
  displayName: "Text",
})(Box);
