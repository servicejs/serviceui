/**
 * FinePrint
 */

import { StyledComponent } from "@emotion/styled";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";
import Text from "../Text";

const FinePrint = augment({
  component: Text,
  defaultProps: { as: "small" },
  displayName: "FinePrint",
}) as StyledComponent<PropsType<"small"> & Box.Props, {}, any>;

export namespace FinePrint {
  export type Props = PropsType<typeof FinePrint>;
}

export default FinePrint;
