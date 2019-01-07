/**
 * MinHeight mixin
 */

import { MinHeightProperty } from "csstype";
import { ThemedInlineFunctionMixin } from "./Mixin";
import maybe from "./util/maybe";
import stringOrNumberScale from "./util/stringOrNumberScale";

namespace MinHeight {
  export interface MixinProps<TLength = string> {
    minHeight?: number | MinHeightProperty<TLength>;
  }

  export const mixin: ThemedInlineFunctionMixin<MinHeight.MixinProps> = ({ minHeight }) => (theme: any) => ({
    minHeight: maybe(stringOrNumberScale(theme.scale))(minHeight),
  });
}

export default MinHeight;
