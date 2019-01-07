/**
 * Background mixin
 */

import { StaticFunctionMixin } from "./Mixin";
import { CommaSeparatedList } from "./util/css-value-helpers";

namespace Background {
  export const list = CommaSeparatedList;

  export interface MixinProps {
    bg?: string | string[];
  }

  export const mixin: StaticFunctionMixin<Background.MixinProps> = ({ bg }) => ({
    background: bg ? (Array.isArray(bg) ? Background.list(bg) : bg) : undefined,
  });
}

export default Background;
