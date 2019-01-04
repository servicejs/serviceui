/**
 * Image
 */

import { StyledComponent } from "@emotion/styled";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";

const Image = augment({
  component: Box,
  defaultProps: {
    as: "img",
  },
  displayName: "Image",
  mixin: {
    display: "inline-block",
    maxHeight: "100%",
    maxWidth: "100%",
  },
}) as StyledComponent<PropsType<"img"> & Box.Props, {}, any>;

namespace Image {
  export type Props = PropsType<typeof Image>;
}

export default Image;
