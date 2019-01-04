/**
 * InputResetButton
 */

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import InputButton from "../InputButton";

const InputResetButton = augment<typeof InputButton, {}>({
  component: InputButton,
  defaultProps: {
    type: "reset",
  },
  displayName: "InputResetButton",
});

namespace InputResetButton {
  export type Props = PropsType<typeof InputResetButton>;
}

export default InputResetButton;
