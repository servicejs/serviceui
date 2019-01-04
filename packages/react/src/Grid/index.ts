/**
 * Grid
 */

import { gridMixin, GridProps, gridPropsKeys } from "@service-ui/mixins/grid";
import augment from "@service-ui/mixins/util/augment";
import { disallowKeys } from "@service-ui/mixins/util/filter-props";
import PropsType from "@service-ui/mixins/util/PropsType";

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
