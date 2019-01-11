/**
 * Inserted
 */

import { StyledComponent } from "@emotion/styled";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";
import Text from "../Text";

const Inserted = augment({
  component: Text,
  defaultProps: { as: "ins" },
  displayName: "Inserted",
}) as StyledComponent<PropsType<"ins"> & Box.Props, {}, any>;

export namespace Inserted {
  export type Props = PropsType<typeof Inserted>;
}

export default Inserted;
