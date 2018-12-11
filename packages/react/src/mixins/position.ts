import { PositionProperty } from "csstype";

export interface PositionShorthandProps {
  position?: PositionProperty;
}

export const positionMixin = ({ position }: PositionShorthandProps) => ({ position });
