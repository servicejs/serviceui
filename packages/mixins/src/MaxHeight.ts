/**
 * MaxHeight mixin
 */

import { MaxHeightProperty } from "csstype";
import { ThemedInlineFunctionMixin } from "./Mixin";
import maybe from "./util/maybe";
import stringOrNumberScale from "./util/stringOrNumberScale";

namespace MaxHeight {
  export interface MixinProps<TLength = string> {
    maxHeight?: number | MaxHeightProperty<TLength>;
  }

  export const mixin: ThemedInlineFunctionMixin<MaxHeight.MixinProps> = ({ maxHeight }) => (theme: any) => ({
    maxHeight: maybe(stringOrNumberScale(theme.scale))(maxHeight),
  });
}

export default MaxHeight;
