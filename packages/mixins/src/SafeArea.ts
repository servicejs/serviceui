/**
 * SafeArea mixin
 */

import { StaticFunctionMixin } from "./Mixin";
import { selectFirstDefined } from "./util/select-first";
import tuple from "./util/tuple";

namespace SafeArea {
  export interface MixinProps {
    l?: boolean;
    r?: boolean;
    t?: boolean;
    b?: boolean;
    x?: boolean;
    y?: boolean;
    all?: boolean;
  }

  export const mixinKeys = tuple<["l", "r", "t", "b", "x", "y", "all"]>("l", "r", "t", "b", "x", "y", "all");
  Object.freeze(mixinKeys);

  export const mixin: StaticFunctionMixin<SafeArea.MixinProps> = ({ l, r, t, b, x, y, all }) => ({
    paddingBottom: selectFirstDefined(b, y, all) ? "env(safe-area-inset-bottom)" : undefined,
    paddingLeft: selectFirstDefined(l, x, all) ? "env(safe-area-inset-left)" : undefined,
    paddingRight: selectFirstDefined(r, x, all) ? "env(safe-area-inset-right)" : undefined,
    paddingTop: selectFirstDefined(t, y, all) ? "env(safe-area-inset-top)" : undefined,
  });
}

export default SafeArea;
