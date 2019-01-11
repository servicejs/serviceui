/**
 * Grid
 */

import GridMixinNS from "@service-ui/mixins/Grid";
import augment from "@service-ui/mixins/util/augment";
import { disallowKeys } from "@service-ui/mixins/util/filter-props";
import PropsType from "@service-ui/mixins/util/PropsType";

import Box from "../Box";

const Grid = augment<typeof Box, GridMixinNS.Props>({
  component: Box,
  defaultProps: {},
  displayName: "Grid",
  mixin: GridMixinNS.mixin,
  options: {
    shouldForwardProp: disallowKeys(...GridMixinNS.Props.keys),
  },
});

namespace Grid {
  export type Props = PropsType<typeof Grid>;
}

export default Grid;
