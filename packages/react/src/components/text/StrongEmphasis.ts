/**
 * Strong / StrongEmphasis component
 */

/** Imports */

import { augment } from "../../util/augment";
import { EmotionPropsType } from "../../util/PropsType";
import { CoreProps } from "../base";
import { Text, TextProps } from "./Text";

/** Declarations */

export interface StrongEmphasisProps
  extends CoreProps,
    EmotionPropsType<"strong"> {}

/**
 * Strong emphasis (`<strong>`)
 */
export const StrongEmphasis = augment<StrongEmphasisProps, TextProps>({
  defaultProps: { as: "strong" },
  displayName: "StrongEmphasis",
})(Text);

export const Strong = StrongEmphasis;
