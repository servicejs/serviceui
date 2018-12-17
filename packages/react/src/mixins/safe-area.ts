/**
 * SafeArea mixin
 */

import { selectFirstDefined } from "../util";
import { FunctionMixin } from "./mixin";

export interface SafeAreaMixinProps {
  l?: boolean;
  r?: boolean;
  t?: boolean;
  b?: boolean;
  x?: boolean;
  y?: boolean;
  all?: boolean;
}

export const safeAreaBasePropsKeys = Object.freeze(["l", "r", "t", "b", "x", "y", "all"]);

export const safeAreaMixin: FunctionMixin<SafeAreaMixinProps> = ({ l, r, t, b, x, y, all }) => ({
  paddingBottom: selectFirstDefined(b, y, all) ? "env(safe-area-inset-bottom)" : undefined,
  paddingLeft: selectFirstDefined(l, x, all) ? "env(safe-area-inset-left)" : undefined,
  paddingRight: selectFirstDefined(r, x, all) ? "env(safe-area-inset-right)" : undefined,
  paddingTop: selectFirstDefined(t, y, all) ? "env(safe-area-inset-top)" : undefined,
});
