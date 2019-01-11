/**
 * Deleted
 */

import { StyledComponent } from "@emotion/styled";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";
import Text from "../Text";

const Deleted = augment({
  component: Text,
  defaultProps: { as: "del" },
  displayName: "Deleted",
}) as StyledComponent<PropsType<"del"> & Box.Props, {}, any>;

export namespace Deleted {
  export type Props = PropsType<typeof Deleted>;
}

export default Deleted;
