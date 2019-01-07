/**
 * Stroke mixin
 */

import { StrokeProperty } from "csstype";
import { StaticFunctionMixin } from "./Mixin";

namespace Stroke {
  export interface MixinProps {
    stroke?: StrokeProperty;
  }

  export const mixin: StaticFunctionMixin<Stroke.MixinProps> = ({ stroke }) => ({ stroke });
}

export default Stroke;
