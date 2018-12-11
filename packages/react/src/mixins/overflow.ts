import { OverflowProperty, OverflowXProperty, OverflowYProperty } from "csstype";
import { Mixin } from "./mixin";

export interface OverflowProps {
  overflow?: OverflowProperty;
  overflowX?: OverflowXProperty;
  overflowY?: OverflowYProperty;
}

export const overflowMixin: Mixin<OverflowProps> = ({ overflow, overflowX, overflowY }) => ({
  overflow,
  overflowX,
  overflowY,
});
