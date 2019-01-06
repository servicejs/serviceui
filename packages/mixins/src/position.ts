import { PositionProperty } from "csstype";
import { FunctionMixin } from "./mixin";

export interface PositionPropertyMixinProps {
  position?: PositionProperty;
}

export const positionPropertyMixin: FunctionMixin<PositionPropertyMixinProps> = ({ position }) => ({ position });
