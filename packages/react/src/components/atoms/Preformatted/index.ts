/**
 * Preformatted
 */

import { StyledComponent } from "@emotion/styled";

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";
import Text from "../Text";

const Preformatted = augment({
  component: Text.Block,
  defaultProps: { as: "pre" },
  displayName: "Preformatted",
}) as StyledComponent<PropsType<"pre"> & Box.Props, {}, any>;

export namespace Preformatted {
  export type Props = PropsType<typeof Preformatted>;
}

export default Preformatted;
