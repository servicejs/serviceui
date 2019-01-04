/**
 * Horizontally and vertically centered container
 */

import { StyledComponent } from "@emotion/styled";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";

const Center = augment<typeof Box, {}>({
  component: Box,
  defaultProps: {
    m: "auto",
  },
  displayName: "Center",
}) as StyledComponent<PropsType<"div"> & Box.Props, {}, any> & {
  X: typeof CenterX;
  Y: typeof CenterY;
};

const CenterX = augment<typeof Box, {}>({
  component: Box,
  defaultProps: {
    mx: "auto",
    my: "0",
  },
  displayName: "Center.X",
});
Center.X = CenterX;

const CenterY = augment<typeof Box, {}>({
  component: Box,
  defaultProps: {
    mx: "0",
    my: "auto",
  },
  displayName: "Center.Y",
});

Center.Y = CenterY;

namespace Center {
  export type Props = PropsType<typeof Center>;

  export type X = typeof Center.X;
  export namespace X {
    // tslint:disable-next-line:no-shadowed-variable
    export type Props = PropsType<typeof Center.X>;
  }

  export type Y = typeof Center.Y;
  export namespace Y {
    // tslint:disable-next-line:no-shadowed-variable
    export type Props = PropsType<typeof Center.Y>;
  }
}

export default Center;
