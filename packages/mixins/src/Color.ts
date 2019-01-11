/**
 * Color mixin
 */

import { StaticFunctionMixin } from "./Mixin";

namespace Color {
  export interface MixinProps {
    c?: string;
  }

  export const mixin: StaticFunctionMixin<Color.MixinProps> = ({ c: color }) => ({ color });
}

export default Color;
