/**
 * InputButton
 */

import { StyledComponent } from "@emotion/styled";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";
import Button from "../Button";

const InputButton = augment({
  component: Button,
  defaultProps: {
    as: "input",
    type: "button",
  },
  displayName: "InputButton",
  mixin: () => ({
    verticalAlign: "unset",
  }),
}) as StyledComponent<PropsType<"input"> & Box.Props, {}, any>;

namespace InputButton {
  export type Props = PropsType<typeof InputButton>;
}

export default InputButton;
