/**
 * HorizontalOverflowScrollContainer
 */

/** Imports */

import { augment } from "../../util";
import { Box, BoxProps } from "../base";

/** Declarations */

export const HorizontalOverflowScrollContainer = augment<BoxProps, BoxProps>({
  defaultProps: {
    css: {
      maxWidth: "100%",
      overflowX: "auto",
    },
  },
  displayName: "HorizontalOverflowScrollContainer",
})(Box);
