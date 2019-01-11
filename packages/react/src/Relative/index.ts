/**
 * Relative positioned container
 */

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";

const Relative = augment<typeof Box, {}>({
  component: Box,
  defaultProps: {
    position: "relative",
  },
  displayName: "Relative",
});

namespace Relative {
  export type Props = PropsType<typeof Relative>;
}

export default Relative;
