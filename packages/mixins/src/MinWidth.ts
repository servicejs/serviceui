/**
 * MinWidth mixin
 */

import { MinWidthProperty } from "csstype";
import { ThemedInlineFunctionMixin } from "./Mixin";
import maybe from "./util/maybe";
import stringOrNumberScale from "./util/stringOrNumberScale";

namespace MinWidth {
  export interface MixinProps<TLength = string> {
    minWidth?: number | MinWidthProperty<TLength>;
  }

  export const mixin: ThemedInlineFunctionMixin<MinWidth.MixinProps> = ({ minWidth }) => (theme: any) => ({
    minWidth: maybe(stringOrNumberScale(theme.scale))(minWidth),
  });
}

export default MinWidth;
