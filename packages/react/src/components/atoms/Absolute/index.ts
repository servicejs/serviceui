/**
 * Absolute positioned container
 */

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";

const Absolute = augment<typeof Box, {}>({
  component: Box,
  defaultProps: {
    position: "absolute",
  },
  displayName: "Absolute",
});

namespace Absolute {
  export type Props = PropsType<typeof Absolute>;
}

export default Absolute;
