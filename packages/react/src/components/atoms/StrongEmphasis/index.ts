/**
 * StrongEmphasis
 */

import { StyledComponent } from "@emotion/styled";

import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";
import Text from "../Text";

const StrongEmphasis = augment({
  component: Text,
  defaultProps: { as: "strong" },
  displayName: "StrongEmphasis",
}) as StyledComponent<PropsType<"strong"> & Box.Props, {}, any>;

export namespace StrongEmphasis {
  export type Props = PropsType<typeof StrongEmphasis>;
}

export default StrongEmphasis;
