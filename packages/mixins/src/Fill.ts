/**
 * Fill mixin
 */

import { FillProperty } from "csstype";
import { StaticFunctionMixin } from "./Mixin";

namespace Fill {
  export interface MixinProps {
    fill?: FillProperty;
  }

  export const mixin: StaticFunctionMixin<Fill.MixinProps> = ({ fill }) => ({ fill });
}

export default Fill;
