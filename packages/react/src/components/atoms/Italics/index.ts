/**
 * Italics
 */

import { StyledComponent } from "@emotion/styled";

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";
import Text from "../Text";

const Italics = augment({
  component: Text,
  defaultProps: { as: "i" },
  displayName: "Italics",
}) as StyledComponent<PropsType<"i"> & Box.Props, {}, any>;

export namespace Italics {
  export type Props = PropsType<typeof Italics>;
}

export default Italics;
