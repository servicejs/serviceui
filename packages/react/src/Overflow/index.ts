/**
 * Overflow container
 */

import { StyledComponent } from "@emotion/styled";

import { overflowMixin, OverflowMixinProps } from "@service-ui/mixins/overflow";
import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";

/**
 * A container that displays scroll bars when its content overflows
 */
const Overflow = augment<typeof Box, OverflowMixinProps>({
  component: Box,
  defaultProps: {
    overflow: "auto",
    overflowX: "auto",
    overflowY: "auto",
  },
  displayName: "Overflow",
  mixin: overflowMixin,
}) as StyledComponent<PropsType<"div"> & Box.Props, OverflowMixinProps, any> & {
  X: typeof OverflowX;
  Y: typeof OverflowY;
};

const OverflowX = augment<typeof Overflow, {}>({
  component: Overflow,
  defaultProps: {
    overflow: "auto",
    overflowX: "auto",
    overflowY: "hidden",
  },
  displayName: "Overflow.X",
});
Overflow.X = OverflowX;

const OverflowY = augment<typeof Overflow, {}>({
  component: Overflow,
  defaultProps: {
    overflow: "auto",
    overflowX: "hidden",
    overflowY: "auto",
  },
  displayName: "Overflow.Y",
});
Overflow.Y = OverflowY;

namespace Overflow {
  export type Props = PropsType<typeof Overflow>;

  /**
   * A container that displays scroll bars when its content overflows horizontally
   */
  export type X = typeof OverflowX;
  export namespace X {
    // tslint:disable-next-line:no-shadowed-variable
    export type Props = PropsType<typeof OverflowX>;
  }

  /**
   * A container that displays scroll bars when its content overflows vertically
   */
  export type Y = typeof OverflowY;
  export namespace Y {
    // tslint:disable-next-line:no-shadowed-variable
    export type Props = PropsType<typeof OverflowY>;
  }
}

export default Overflow;
