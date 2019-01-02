/**
 * FieldSet
 */

import { StyledComponent } from "@emotion/styled";
import augment from "../../../util/augment";
import PropsType from "../../../util/PropsType";
import Box from "../Box";

const FieldSet = augment({
  component: Box,
  defaultProps: {
    as: "fieldset",
  },
  displayName: "FieldSet",
}) as StyledComponent<PropsType<"fieldset"> & Box.Props, {}, any>;

namespace FieldSet {
  export type Props = PropsType<typeof FieldSet>;
}

export default FieldSet;
