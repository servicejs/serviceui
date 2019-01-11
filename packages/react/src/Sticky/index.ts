/**
 * Sticky positioned container
 */

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
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
