/**
 * Position mixin
 */

import { PositionProperty } from "csstype";
import { StaticFunctionMixin } from "./Mixin";

namespace Position {
  export interface MixinProps {
    position?: PositionProperty;
  }

  export const mixin: StaticFunctionMixin<Position.MixinProps> = ({ position }) => ({ position });
}

export default Position;
