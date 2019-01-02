/**
 * Multi-line text input (textarea)
 */

import { jsx } from "@emotion/core";
import { StyledComponent } from "@emotion/styled";
import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";
import TextInput from "../TextInput";

const MultiLineTextInput = augment({
  component: ({ value, ...rest }: MultiLineTextInput.Props) => jsx(TextInput, { ...(rest as any) }, value),
  defaultProps: {
    as: "textarea",
  },
  displayName: "MultiLineTextInput",
}) as StyledComponent<PropsType<"textarea"> & Box.Props, { children?: never }, any>;

namespace MultiLineTextInput {
  export type Props = PropsType<typeof MultiLineTextInput>;
}

export default MultiLineTextInput;
