/**
 * Emphasis
 */

import { StyledComponent } from "@emotion/styled";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";
import Text from "../Text";

const Emphasis = augment({
  component: Text,
  defaultProps: { as: "em" },
  displayName: "Emphasis",
}) as StyledComponent<PropsType<"em"> & Box.Props, {}, any>;

export namespace Emphasis {
  export type Props = PropsType<typeof Emphasis>;
}

export default Emphasis;
