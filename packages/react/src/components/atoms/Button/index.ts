/**
 * Button
 */

import { StyledComponent } from "@emotion/styled";

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";

const Button = augment({
  component: Box,
  defaultProps: {
    as: "button",
  },
  displayName: "Button",
  mixin: () => ({
    cursor: "pointer",
  }),
}) as StyledComponent<PropsType<"button"> & Box.Props, {}, any>;

namespace Button {
  export type Props = PropsType<typeof Button>;
}

export default Button;
