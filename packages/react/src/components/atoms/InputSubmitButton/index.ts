/**
 * InputSubmitButton
 */

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import InputButton from "../InputButton";

const InputSubmitButton = augment<typeof InputButton, {}>({
  component: InputButton,
  defaultProps: {
    type: "submit",
  },
  displayName: "InputSubmitButton",
});

namespace InputSubmitButton {
  export type Props = PropsType<typeof InputSubmitButton>;
}

export default InputSubmitButton;
