/**
 * Fixed positioned container
 */

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";

const Fixed = augment<typeof Box, {}>({
  component: Box,
  defaultProps: {
    position: "fixed",
  },
  displayName: "Fixed",
});

namespace Fixed {
  export type Props = PropsType<typeof Fixed>;
}

export default Fixed;
