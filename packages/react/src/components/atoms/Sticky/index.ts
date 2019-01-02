/**
 * Sticky positioned container
 */

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";

const Sticky = augment<typeof Box, {}>({
  component: Box,
  defaultProps: {
    position: "sticky",
  },
  displayName: "Sticky",
});

namespace Sticky {
  export type Props = PropsType<typeof Sticky>;
}

export default Sticky;
