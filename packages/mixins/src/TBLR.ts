/**
 * Top/Bottom/Left/Right mixin
 */

import { BottomProperty, LeftProperty, RightProperty, TopProperty } from "csstype";
import { ThemedInlineFunctionMixin } from "./Mixin";
import maybe from "./util/maybe";
import stringOrNumberScale from "./util/stringOrNumberScale";

namespace TBLR {
  export interface MixinProps<TLength = string> {
    top?: number | TopProperty<TLength>;
    bottom?: number | BottomProperty<TLength>;
    left?: number | LeftProperty<TLength>;
    right?: number | RightProperty<TLength>;
  }

  export const mixin: ThemedInlineFunctionMixin<TBLR.MixinProps> = ({ top, bottom, left, right }) => (theme: any) => {
    const scale = maybe(stringOrNumberScale(theme.scale));
    return {
      bottom: scale(bottom),
      left: scale(left),
      right: scale(right),
      top: scale(top),
    };
  };
}

export default TBLR;
