/**
 * Overflow mixin
 */

import { OverflowProperty, OverflowXProperty, OverflowYProperty } from "csstype";
import { StaticFunctionMixin } from "./Mixin";

namespace Overflow {
  export interface MixinProps {
    overflow?: OverflowProperty;
    overflowX?: OverflowXProperty;
    overflowY?: OverflowYProperty;
  }

  export const enum Values {
    Auto = "auto",
    Clip = "clip",
    Hidden = "hidden",
    Scroll = "scroll",
    Visible = "visible",
  }

  export const mixin: StaticFunctionMixin<Overflow.MixinProps> = ({ overflow, overflowX, overflowY }) => ({
    overflow,
    overflowX,
    overflowY,
  });
}

export default Overflow;
