/**
 * Bold
 */

import { StyledComponent } from "@emotion/styled";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";
import Text from "../Text";

const Bold = augment({
  component: Text,
  defaultProps: { as: "b" },
  displayName: "Bold",
}) as StyledComponent<PropsType<"b"> & Box.Props, {}, any>;

export namespace Bold {
  export type Props = PropsType<typeof Bold>;
}

export default Bold;
