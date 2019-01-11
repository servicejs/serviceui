/**
 * Input
 */

import { StyledComponent } from "@emotion/styled";
import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";

const Input = augment({
  component: Box,
  defaultProps: {
    as: "input",
  },
  displayName: "Input",
}) as StyledComponent<PropsType<"input"> & Box.Props, { children?: never }, any>;

namespace Input {
  export type Props = PropsType<typeof Input>;
}

export default Input;
