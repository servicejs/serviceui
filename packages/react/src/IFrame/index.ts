/**
 * IFrame
 */

import { StyledComponent } from "@emotion/styled";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";

const IFrame = augment({
  component: Box,
  defaultProps: {
    as: "iframe",
  },
  displayName: "IFrame",
}) as StyledComponent<PropsType<"iframe">, {}, any>;

namespace IFrame {
  export type Props = PropsType<typeof IFrame>;
}

export default IFrame;
