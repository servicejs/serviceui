/**
 * TextInput
 */

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Input from "../Input";

const TextInput = augment<typeof Input, {}>({
  component: Input,
  defaultProps: {
    type: "text",
  },
  displayName: "TextInput",
});

namespace TextInput {
  export type Props = PropsType<typeof TextInput>;
}

export default TextInput;
