/**
 * Abbreviation
 */

import { StyledComponent } from "@emotion/styled";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";
import Text from "../Text";

const Abbreviation = augment({
  component: Text,
  defaultProps: { as: "abbr" },
  displayName: "Abbreviation",
}) as StyledComponent<PropsType<"abbr"> & Box.Props, {}, any>;

export namespace Abbreviation {
  export type Props = PropsType<typeof Abbreviation>;
}

export default Abbreviation;
