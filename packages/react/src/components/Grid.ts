/**
 * Grid
 */

import { gridMixin, GridProps, gridPropsKeys } from "../mixins";
import { augment, disallowKeys } from "../util";
import { Box } from "./Box";

export const Grid = augment<typeof Box, GridProps>({
  component: Box,
  defaultProps: {},
  displayName: "Grid",
  mixin: gridMixin,
  options: {
    shouldForwardProp: disallowKeys(...gridPropsKeys),
  },
});
