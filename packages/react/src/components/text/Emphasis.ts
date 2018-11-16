/**
 * Em / Emphasis component
 */

/** Imports */

import { augment } from "../../util/augment";
import { EmotionPropsType } from "../../util/PropsType";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface EmphasisProps extends CoreProps, EmotionPropsType<"em"> {}

/**
 * Emphasis (`<em>`)
 */
export const Emphasis = augment<EmphasisProps, TextProps>({
  defaultProps: { as: "em" },
  displayName: "Emphasis",
})(Text);

export const Em = Emphasis;
