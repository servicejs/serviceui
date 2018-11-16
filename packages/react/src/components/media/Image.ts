/**
 * Image component
 */

/** Imports */

import { augment } from "../../util/augment";
import { EmotionPropsType } from "../../util/PropsType";
import { Box, BoxProps, CoreProps } from "../base";

/** Declarations */

export interface ImageProps extends CoreProps, EmotionPropsType<"img"> {}

/**
 * Image (`<img>`)
 */
export const Image = augment<ImageProps, BoxProps>({
  defaultProps: {
    as: "img",
    css: {
      display: "block",
      height: "auto",
      maxHeight: "100%",
      maxWidth: "100%",
      width: "auto",
    },
  },
  displayName: "Image",
})(Box);
