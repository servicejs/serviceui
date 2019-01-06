/**
 * Overflow mixin
 */

import { OverflowProperty, OverflowXProperty, OverflowYProperty } from "csstype";
import { FunctionMixin } from "./mixin";

export interface OverflowMixinProps {
  overflow?: OverflowProperty;
  overflowX?: OverflowXProperty;
  overflowY?: OverflowYProperty;
}

export const overflowMixin: FunctionMixin<OverflowMixinProps> = ({ overflow, overflowX, overflowY }) => ({
  overflow,
  overflowX,
  overflowY,
});
