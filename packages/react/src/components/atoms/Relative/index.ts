/**
 * Relative positioned container
 */

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
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
