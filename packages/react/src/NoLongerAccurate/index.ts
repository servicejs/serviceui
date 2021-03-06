/**
 * NoLongerAccurate
 */

import { StyledComponent } from "@emotion/styled";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";
import Text from "../Text";

const NoLongerAccurate = augment({
  component: Text,
  defaultProps: { as: "s" },
  displayName: "NoLongerAccurate",
}) as StyledComponent<PropsType<"s"> & Box.Props, {}, any>;

export namespace NoLongerAccurate {
  export type Props = PropsType<typeof NoLongerAccurate>;
}

export default NoLongerAccurate;
