import { PositionProperty } from "csstype";

export interface PositionPropertyMixinProps {
  position?: PositionProperty;
}

export const positionPropertyMixin = ({ position }: PositionPropertyMixinProps) => ({ position });
