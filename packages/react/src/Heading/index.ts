/**
 * Heading
 */

// tslint:disable:no-shadowed-variable

import { StyledComponent } from "@emotion/styled";
import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";
import Text from "../Text";

const Heading = augment({
  component: Text.Block,
  defaultProps: {
    level: 1,
  },
  displayName: "Heading",
}) as StyledComponent<PropsType<"h1"> & Box.Props, {}, any>;
namespace Heading {
  export type Props = PropsType<typeof Heading>;
}

export const H1 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { as: "h1" }, displayName: "H1" });
export namespace H1 {
  export type Props = PropsType<typeof H1>;
}

export const H2 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { as: "h2" }, displayName: "H2" });
export namespace H2 {
  export type Props = PropsType<typeof H2>;
}

export const H3 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { as: "h3" }, displayName: "H3" });
export namespace H3 {
  export type Props = PropsType<typeof H3>;
}

export const H4 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { as: "h4" }, displayName: "H4" });
export namespace H4 {
  export type Props = PropsType<typeof H4>;
}

export const H5 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { as: "h5" }, displayName: "H5" });
export namespace H5 {
  export type Props = PropsType<typeof H5>;
}

export const H6 = augment<typeof Heading, {}>({ component: Heading, defaultProps: { as: "h6" }, displayName: "H6" });
export namespace H6 {
  export type Props = PropsType<typeof H6>;
}

export default Heading;
