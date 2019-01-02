/**
 * Grid
 */

import { gridMixin, GridProps, gridPropsKeys } from "../../../mixins/grid";
import augment from "../../../util/augment";
import { disallowKeys } from "../../../util/filter-props";
import PropsType from "../../../util/PropsType";
import Box from "../Box";

const Grid = augment<typeof Box, GridProps>({
  component: Box,
  defaultProps: {},
  displayName: "Grid",
  mixin: gridMixin,
  options: {
    shouldForwardProp: disallowKeys(...gridPropsKeys),
  },
});

namespace Grid {
  export type Props = PropsType<typeof Grid>;
}

export default Grid;
