/**
 * InputSubmitButton
 */

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
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
