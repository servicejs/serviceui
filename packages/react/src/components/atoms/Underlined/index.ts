/**
 * Underlined
 */

import { StyledComponent } from "@emotion/styled";

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";
import Text from "../Text";

const Underlined = augment({
  component: Text,
  defaultProps: { as: "u" },
  displayName: "Underlined",
}) as StyledComponent<PropsType<"u"> & Box.Props, {}, any>;

export namespace Underlined {
  export type Props = PropsType<typeof Underlined>;
}

export default Underlined;
