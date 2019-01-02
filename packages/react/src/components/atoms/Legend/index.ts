/**
 * Legend
 */

import { StyledComponent } from "@emotion/styled";
import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";

const Legend = augment({
  component: Box,
  defaultProps: {
    as: "legend",
  },
  displayName: "Legend",
}) as StyledComponent<PropsType<"legend"> & Box.Props, {}, any>;

namespace Legend {
  export type Props = PropsType<typeof Legend>;
}

export default Legend;
