/**
 * Picture
 */

import { StyledComponent } from "@emotion/styled";

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";

const Picture = augment({
  component: Box,
  defaultProps: {
    as: "picture",
  },
  displayName: "Picture",
}) as StyledComponent<PropsType<"picture"> & Box.Props, {}, any>;

namespace Picture {
  export type Props = PropsType<typeof Picture>;
}

export default Picture;
