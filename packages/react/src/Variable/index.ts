/**
 * Variable
 */

import { StyledComponent } from "@emotion/styled";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";
import Text from "../Text";

const Variable = augment({
  component: Text,
  defaultProps: { as: "var" },
  displayName: "Variable",
}) as StyledComponent<PropsType<"var"> & Box.Props, {}, any>;

export namespace Variable {
  export type Props = PropsType<typeof Variable>;
}

export default Variable;
