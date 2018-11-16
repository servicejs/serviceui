/**
 * Box component
 */

/** Imports */

import { augment } from "../../util/augment";
import { EmotionPropsType } from "../../util/PropsType";
import { Base, BaseProps } from "./Base";
import { CoreProps } from "./types";

/** Declarations */

export interface BoxProps extends CoreProps, EmotionPropsType<"div"> {}

export const Box = augment<BoxProps, BaseProps>({
  defaultProps: { as: "div" },
  displayName: "Box",
})(Base);
