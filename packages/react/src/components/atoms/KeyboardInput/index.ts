/**
 * KeyboardInput
 */

import { StyledComponent } from "@emotion/styled";

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";
import Text from "../Text";

const KeyboardInput = augment({
  component: Text,
  defaultProps: { as: "kbd" },
  displayName: "KeyboardInput",
}) as StyledComponent<PropsType<"kbd"> & Box.Props, {}, any>;

export namespace KeyboardInput {
  export type Props = PropsType<typeof KeyboardInput>;
}

export default KeyboardInput;
