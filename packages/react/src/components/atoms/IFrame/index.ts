/**
 * IFrame
 */

import { StyledComponent } from "@emotion/styled";

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
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
