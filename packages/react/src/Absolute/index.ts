/**
 * Absolute positioned container
 */

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
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
