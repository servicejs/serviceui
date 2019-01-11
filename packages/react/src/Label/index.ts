/**
 * Label
 */

import { StyledComponent } from "@emotion/styled";
import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";

const Label = augment({
  component: Box,
  defaultProps: {
    as: "label",
  },
  displayName: "Label",
}) as StyledComponent<PropsType<"label"> & Box.Props, {}, any>;

namespace Label {
  export type Props = PropsType<typeof Label>;
}

export default Label;
